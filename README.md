# Python Project Template

A modern Python project template with Poetry for dependency management, UV for fast installations (10-100x faster), and VS Code integration.

## Key Features

- **Fast Package Management**

  - Poetry 2.1.1+ for dependency management
  - UV 0.6.5+ for rapid installations (10-100x faster)
  - Efficient virtual environments

- **Development Tools**

  - VS Code integration with custom tasks
  - Pre-commit hooks
  - Type checking (mypy >=1.0.0)
  - Code formatting (black)
  - Linting (ruff 0.11.2)

- **Testing Infrastructure**
  - Pytest 8.3.5 configuration
  - Code coverage support (pytest-cov 6.0.0)
  - Parallel testing (pytest-xdist 3.6.1)
  - VS Code test integration

## Requirements

- macOS (optimized for macOS environment)
- Python 3.12+
- VS Code with Python extension
- Git

## Quickstart: Creating a New Project

### Using VS Code Tasks (Recommended)

1. Open Command Palette (Cmd+Shift+P)
2. Select "Tasks: Run Task"
3. Choose "0. Setup Development Tools"
4. Wait for the environment setup to complete

The task will:

- Install UV 0.6.5
- Install Poetry 2.1.1
- Create a virtual environment
- Install all development dependencies
- Verify tool installations

### Manual Setup

1. Create a new repository using this template
2. Clone your new repository
3. Install UV:
   ```bash
   curl -sSL https://github.com/astral-sh/uv/releases/download/0.6.5/uv-installer.sh | sh
   ```
4. Install Poetry:
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```
5. Set up your environment:
   ```bash
   uv venv
   source .venv/bin/activate
   uv pip install -e .
   uv pip install --prerelease=allow black mypy>=1.0.0 ruff==0.11.2 pytest==8.3.5 pytest-cov==6.0.0 pytest-xdist==3.6.1 pytest-watch==4.2.0
   ```

## Available VS Code Tasks

- **0. Setup Development Tools**: Installs and configures all development tools
- **1. Setup Python Environment**: Configures Python environment
- **2-9**: Various project setup and cleanup tasks
- **Setup Complete Project**: Runs all tasks in sequence

## Development Tools Configuration

### VS Code Settings

The project includes pre-configured settings for:

- Python path and environment
- Code formatting (Black)
- Type checking (Mypy)
- Linting (Ruff)
- Test discovery and execution
- Editor behavior and formatting rules

### Pre-commit Hooks

Includes hooks for:

- Code formatting
- Type checking
- Linting
- Import sorting
- Syntax checking

## Documentation

- [Package Management Strategy](docs/package-management.md)
- [Project Capabilities](docs/capabilities.md)

## Project Structure

```
.
├── src/                  # Source code
├── tests/               # Test files
├── docs/               # Documentation
├── scripts/            # Setup automation
├── .vscode/            # VS Code settings
├── pyproject.toml      # Project configuration
└── .pre-commit-config.yaml
```

## Development Environment Features

### Type Checking

- Strict type checking with mypy
- Integrated VS Code type hints
- Error reporting in editor

### Code Quality

- Auto-formatting with Black
- Import sorting with Ruff
- Comprehensive linting rules
- Pre-commit hook integration

### Testing

- Pytest integration in VS Code
- Coverage reporting
- Parallel test execution
- Watch mode for TDD
