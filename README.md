# Python Project Template

A modern Python project template with Poetry for dependency management, UV for package installation, and VS Code integration.

## Features

- Poetry for dependency declaration
- UV for fast package installation and virtual environments
- Pre-commit hooks for code quality
- VS Code configuration
- Testing infrastructure
- Type checking support
- GitHub Actions CI/CD (coming soon)

## Getting Started

1. Create a new repository using this template
2. Clone your new repository
3. Install UV if you haven't already:
   ```bash
   curl -sSL https://github.com/astral-sh/uv/releases/download/0.6.5/uv-installer.sh | sh
   ```
4. Install Poetry if you haven't already:
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```
5. Create a virtual environment and install dependencies using UV:
   ```bash
   uv venv
   uv pip install -e .
   ```
6. Activate pre-commit hooks:
   ```bash
   uv pip install pre-commit
   pre-commit install
   ```

## Development

This template includes:

- Code formatting with Black
- Type checking with mypy
- Linting with flake8
- Testing with pytest
- VS Code integration

### Package Management Strategy

This template uses a hybrid approach for package management:

- **Poetry** for dependency declaration and resolution (pyproject.toml)
- **UV** for fast package installation and virtual environment management

This combination provides:

- Poetry's robust dependency resolution and project management
- UV's superior installation speed (up to 10-100x faster than pip)
- Efficient virtual environment handling

## Project Structure

```
.
├── src/                  # Source code
├── tests/               # Test files
├── .vscode/            # VS Code settings
├── pyproject.toml      # Poetry and tool configurations
└── .pre-commit-config.yaml
```
