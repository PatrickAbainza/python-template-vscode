@echo off
setlocal enabledelayedexpansion

echo Setting up development environment...

:: Check if UV is installed
where uv >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing UV...
    powershell -Command "iwr -useb https://astral.sh/uv/install.ps1 | iex"
)

:: Create virtual environment and install dependencies
echo Creating virtual environment...
uv venv

:: Install dependencies
echo Installing dependencies...
uv pip install -e ".[dev]"

:: Install pre-commit hooks
echo Setting up pre-commit hooks...
uv pip install pre-commit
pre-commit install

:: Verify installation
echo Verifying installation...
uv pip list

echo Environment setup complete!
echo To activate the environment, run: .venv\Scripts\activate.bat