const fs = require('fs');
const path = require('path');
const os = require('os');
const VSCodeErrorLogger = require('./vscode-error-logger');

describe('VSCodeErrorLogger', () => {
    let testBaseDir;
    let logger;

    beforeEach(() => {
        // Set up test environment
        testBaseDir = path.join(os.tmpdir(), 'roocode-test-logs');
        
        // Clean up test directory if it exists
        if (fs.existsSync(testBaseDir)) {
            fs.rmSync(testBaseDir, { recursive: true, force: true });
        }

        // Create new logger instance with test directory
        logger = new VSCodeErrorLogger({ testBaseDir });
    });

    afterEach(() => {
        // Clean up test directory
        if (fs.existsSync(testBaseDir)) {
            fs.rmSync(testBaseDir, { recursive: true, force: true });
        }
    });

    test('should create log directory structure', () => {
        expect(fs.existsSync(path.join(testBaseDir, 'RooCode', 'logs', 'workspaces'))).toBe(true);
    });

    test('should use correct base directory for different platforms', () => {
        const windowsLogger = new VSCodeErrorLogger({ testBaseDir });
        const unixLogger = new VSCodeErrorLogger({ testBaseDir });

        expect(windowsLogger.baseDir).toBe(path.join(testBaseDir, 'RooCode', 'logs'));
        expect(unixLogger.baseDir).toBe(path.join(testBaseDir, 'RooCode', 'logs'));
    });

    test('should log errors with workspace information', async () => {
        const error = {
            name: 'TestError',
            status: 400,
            message: 'Test error message',
            stack: 'Test stack trace'
        };

        await logger.logError(
            error,
            '/api/test',
            'POST',
            { test: 'data' }
        );

        const logPath = path.join(testBaseDir, 'RooCode', 'logs', 'workspaces', logger.workspaceName, 'api-errors.log');
        expect(fs.existsSync(logPath)).toBe(true);

        const logContent = fs.readFileSync(logPath, 'utf8');
        expect(logContent).toContain('TestError (400)');
        expect(logContent).toContain('Workspace: ' + logger.workspaceName);
        expect(logContent).toContain('Endpoint: /api/test');
        expect(logContent).toContain('Operation: POST');
    });

    test('error handler middleware should log workspace-specific errors', async () => {
        const middleware = logger.errorHandler();
        const error = {
            name: 'APIError',
            status: 500,
            message: 'Internal Server Error',
            stack: 'Test stack trace'
        };

        const req = {
            path: '/api/test',
            method: 'POST',
            body: { test: 'data' },
            query: { filter: 'test' },
            params: { id: '123' }
        };
        const res = { locals: {} };
        const next = jest.fn();

        await middleware(error, req, res, next);

        const logPath = path.join(testBaseDir, 'RooCode', 'logs', 'workspaces', logger.workspaceName, 'api-errors.log');
        expect(fs.existsSync(logPath)).toBe(true);

        const logContent = fs.readFileSync(logPath, 'utf8');
        expect(logContent).toContain('APIError (500)');
        expect(logContent).toContain('Workspace: ' + logger.workspaceName);
        expect(logContent).toContain('Internal Server Error');
        expect(next).toHaveBeenCalledWith(error);
    });
});