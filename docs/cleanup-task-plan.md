# Cleanup Task Implementation Plan

## Overview

Add a new cleanup task to `.vscode/tasks.json` that removes temporary files and setup scripts after project installation is complete.

## Task Details

### Task Configuration

```json
{
  "label": "Project Cleanup",
  "type": "shell",
  "command": "${command:python.interpreterPath}",
  "args": [
    "-c",
    "import shutil, os; [os.remove(f) if os.path.exists(f) else None for f in ['insert-variables.cmd', 'insert-variables.sh', 'pyproject.toml.bak']]; [shutil.rmtree(d) if os.path.exists(d) else None for d in ['htmlcov', 'scripts']]"
  ],
  "problemMatcher": [],
  "presentation": {
    "reveal": "always",
    "panel": "shared"
  },
  "group": "none",
  "detail": "Removes temporary files and setup scripts after project installation"
}
```

## Files to Remove

1. Temporary files:
   - insert-variables.cmd
   - insert-variables.sh
   - pyproject.toml.bak
   - htmlcov/ directory (coverage reports)
2. Setup scripts:
   - Entire scripts/ directory

## Implementation Notes

1. The task should be added to the existing tasks.json
2. Use Python's built-in functions for safe file operations
3. Handle cases where files might already be deleted
4. Show cleanup progress in VS Code terminal

## Next Steps

Switch to Code mode to implement these changes in tasks.json
