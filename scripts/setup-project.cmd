@echo off
setlocal enabledelayedexpansion

:: Get arguments
set PROJECT_NAME=%1
set PROJECT_PATH=%2

:: Validate inputs
if "%PROJECT_NAME%"=="" (
    echo Error: Project name is required
    exit /b 1
)
if "%PROJECT_PATH%"=="" (
    echo Error: Project path is required
    exit /b 1
)

:: Create project directory
set FULL_PATH=%PROJECT_PATH%\%PROJECT_NAME%
if exist "%FULL_PATH%" (
    echo Error: Directory %FULL_PATH% already exists
    exit /b 1
)

:: Clone template
echo Cloning template...
git clone https://github.com/PatrickAbainza/python-template-vscode.git "%FULL_PATH%"

:: Remove existing git history and initialize new repository
cd "%FULL_PATH%"
rmdir /s /q .git
git init

:: Update project name in pyproject.toml
powershell -Command "(Get-Content pyproject.toml) -replace 'python-project-template', '%PROJECT_NAME%' | Set-Content pyproject.toml"

echo Project template cloned and initialized at %FULL_PATH%