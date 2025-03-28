# Cleanup Task Update Plan

## Issue

The current cleanup task removes the entire `scripts` directory, which includes essential setup scripts needed for Roo Code initialization.

## Solution

Modify the cleanup task to:

1. Only remove specific temporary scripts:

   - insert-variables.cmd
   - insert-variables.sh
   - pyproject.toml.bak

2. Preserve essential setup scripts:
   - scripts/setup-roo.sh
   - scripts/setup-env.sh
   - Other core setup scripts

## Implementation

Update the Python cleanup command in tasks.json to:

```json
{
  "label": "9. Project Cleanup",
  "type": "shell",
  "command": "${command:python.interpreterPath}",
  "args": [
    "-c",
    "import shutil, os; [os.remove(f) if os.path.exists(f) else None for f in ['insert-variables.cmd', 'insert-variables.sh', 'pyproject.toml.bak', '.coverage', 'coverage.xml', '.DS_Store']]; [shutil.rmtree(d) if os.path.exists(d) else None for d in ['htmlcov', '.pytest_cache', 'build', 'dist', '.tox', '.eggs', '*.egg-info']]; [shutil.rmtree(d) for d in glob.glob('**/__pycache__', recursive=True) if os.path.exists(d)]; [os.remove(f) for f in glob.glob('**/*.py[cod]', recursive=True) if os.path.exists(f)]"
  ]
}
```

Notice that we've removed 'scripts' from the directories to clean up, ensuring that essential setup scripts remain available.
