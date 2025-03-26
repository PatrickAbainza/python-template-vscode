# VSCode Error Logger for Roo Code

A universal logging system for tracking API errors across all Roo Code workspaces.

## Features

- Universal logging location across workspaces
- Workspace-specific error logs
- Detailed error information including stack traces
- Cross-platform support (Windows, MacOS, Linux)

## Log Locations

- Windows: `%APPDATA%/RooCode/logs/workspaces/{workspace-name}/api-errors.log`
- MacOS/Linux: `~/.roocode/logs/workspaces/{workspace-name}/api-errors.log`

## Usage

```javascript
const VSCodeErrorLogger = require('./vscode-error-logger');
const logger = new VSCodeErrorLogger();

// Use as middleware
app.use(logger.errorHandler());

// Or log errors directly
await logger.logError(
    error,
    '/api/endpoint',
    'POST',
    requestPayload
);
```

## Log Format

```
[TIMESTAMP] - ERROR_TYPE (STATUS_CODE)
Workspace: WORKSPACE_NAME
Endpoint: API_ENDPOINT
Operation: HTTP_METHOD
Payload: {
  "request": "data"
}
Error Message: ERROR_DETAILS
Stack Trace: STACK_TRACE
-----------------------------------------
```

## Error Types

All API errors are logged, including:
- Validation errors (400)
- Authentication errors (401)
- Authorization errors (403)
- Not found errors (404)
- Server errors (500)
- And more...

## Workspace Organization

Logs are organized by workspace to make debugging easier:
```
RooCode/
└── logs/
    └── workspaces/
        ├── workspace1/
        │   └── api-errors.log
        └── workspace2/
            └── api-errors.log
```

## Testing

Run tests with:
```bash
npm test