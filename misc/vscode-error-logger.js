const fs = require('fs');
const path = require('path');
const os = require('os');

class VSCodeErrorLogger {
    constructor(options = {}) {
        this.testBaseDir = options.testBaseDir;
        this.baseDir = this.getBaseDirectory();
        this.workspaceName = this.getWorkspaceName();
        this.logDir = path.join(this.baseDir, 'workspaces', this.workspaceName);
        this.logFile = path.join(this.logDir, 'api-errors.log');
        this.initializeLogDirectory();
    }

    getBaseDirectory() {
        // Use test directory if provided
        if (this.testBaseDir) {
            return path.join(this.testBaseDir, 'RooCode', 'logs');
        }

        const platform = process.platform;
        if (platform === 'win32') {
            return path.join(process.env.APPDATA, 'RooCode', 'logs');
        } else {
            return path.join(os.homedir(), '.roocode', 'logs');
        }
    }

    getWorkspaceName() {
        try {
            const workspacePath = process.cwd();
            return path.basename(workspacePath);
        } catch (err) {
            return 'default-workspace';
        }
    }

    initializeLogDirectory() {
        const dirs = [
            this.baseDir,
            path.join(this.baseDir, 'workspaces'),
            this.logDir
        ];

        for (const dir of dirs) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true, mode: 0o755 });
            }
        }
    }

    formatErrorEntry(error, endpoint, operation, payload) {
        const timestamp = new Date().toISOString();
        const errorType = error.name || 'APIError';
        const statusCode = error.status || error.statusCode || 'Unknown';
        return `[${timestamp}] - ${errorType} (${statusCode})
Workspace: ${this.workspaceName}
Endpoint: ${endpoint}
Operation: ${operation}
Payload: ${JSON.stringify(payload, null, 2)}
Error Message: ${error.message || 'Unknown error'}
Stack Trace: ${error.stack || 'No stack trace available'}
-----------------------------------------\n`;
    }

    async logError(error, endpoint, operation, payload) {
        try {
            this.initializeLogDirectory();
            const errorEntry = this.formatErrorEntry(error, endpoint, operation, payload);
            await fs.promises.appendFile(this.logFile, errorEntry, { mode: 0o644 });
            return true;
        } catch (err) {
            console.error('Failed to write to error log:', err);
            return false;
        }
    }

    errorHandler() {
        return async (error, req, res, next) => {
            if (error) {
                const endpoint = req.path || 'Unknown Endpoint';
                const operation = req.method || 'Unknown Method';
                const payload = {
                    body: req.body,
                    query: req.query,
                    params: req.params
                };

                await this.logError(
                    error,
                    endpoint,
                    operation,
                    payload
                );

                if (process.env.NODE_ENV !== 'production') {
                    res.locals.error = {
                        message: error.message,
                        stack: error.stack
                    };
                }
            }
            next(error);
        };
    }
}

// Export the class instead of an instance
module.exports = VSCodeErrorLogger;