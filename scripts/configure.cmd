@echo off
setlocal enabledelayedexpansion

echo Configuring project settings...

:: Ensure .vscode directory exists
if not exist .vscode mkdir .vscode

:: Create settings.json if it doesn't exist
if not exist .vscode\settings.json (
    echo {> .vscode\settings.json
    echo     "python.defaultInterpreterPath": "${workspaceFolder}/.venv/Scripts/python.exe",>> .vscode\settings.json
    echo     "python.analysis.typeCheckingMode": "basic",>> .vscode\settings.json
    echo.>> .vscode\settings.json
    echo     "python.testing.pytestEnabled": true,>> .vscode\settings.json
    echo     "python.testing.unittestEnabled": false,>> .vscode\settings.json
    echo.>> .vscode\settings.json
    echo     "[python]": {>> .vscode\settings.json
    echo         "editor.defaultFormatter": "ms-python.black-formatter",>> .vscode\settings.json
    echo         "editor.rulers": [100]>> .vscode\settings.json
    echo     },>> .vscode\settings.json
    echo.>> .vscode\settings.json
    echo     "python.analysis.autoImportCompletions": true,>> .vscode\settings.json
    echo     "python.formatting.provider": "black",>> .vscode\settings.json
    echo     "python.formatting.blackArgs": ["--line-length", "100"],>> .vscode\settings.json
    echo.>> .vscode\settings.json
    echo     "files.exclude": {>> .vscode\settings.json
    echo         "**/__pycache__": true,>> .vscode\settings.json
    echo         "**/.pytest_cache": true,>> .vscode\settings.json
    echo         "**/*.pyc": true>> .vscode\settings.json
    echo     }>> .vscode\settings.json
    echo }>> .vscode\settings.json
)

:: Install Python extensions
code --install-extension ms-python.python --force
code --install-extension ms-python.black-formatter --force

echo Project configuration complete!