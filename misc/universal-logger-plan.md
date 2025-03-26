# Universal Logger Implementation Plan

## Overview
Update the error logging system to store logs in a universal location accessible across all workspaces.

## Storage Location Strategy
1. Base Directory:
   - Windows: `%APPDATA%/RooCode/logs`
   - MacOS/Linux: `~/.roocode/logs`

2. Directory Structure:
```
RooCode/
└── logs/
    └── workspaces/
        ├── workspace1/
        │   └── api-errors.log
        ├── workspace2/
        │   └── api-errors.log
        └── {workspace-name}/
            └── api-errors.log
```

## Implementation Requirements
1. Detect OS and set appropriate base directory
2. Create directory structure if it doesn't exist
3. Get current workspace name/id for subfolder
4. Maintain separate logs per workspace
5. Handle file permissions properly
6. Ensure cross-platform compatibility

## Error Log Format
```
[TIMESTAMP] - {ERROR_TYPE} ({STATUS_CODE})
Workspace: {WORKSPACE_NAME}
Endpoint: {ENDPOINT}
Operation: {OPERATION}
Payload: {REQUEST_DATA}
Error Message: {ERROR_DETAILS}
Stack Trace: {STACK_TRACE}
-----------------------------------------