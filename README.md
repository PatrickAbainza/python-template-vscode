# Python Project Template

A modern Python project template with Poetry and UV for efficient Python package management.

## Features

- Poetry for dependency management
- UV for fast package installation
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
5. Set up your development environment:
   ```bash
   uv venv
   uv pip install -e ".[dev]"
   ```
6. Install pre-commit hooks:
   ```bash
   pre-commit install
   ```

## Development

This template includes:

- Code formatting with Black
- Type checking with mypy
- Linting with flake8
- Testing with pytest
- VS Code integration

For more details about our package management strategy, see [docs/package-management.md](docs/package-management.md).

## Project Structure

```
.
├── src/                  # Source code
├── tests/               # Test files
├── docs/               # Documentation
├── .vscode/            # VS Code settings
├── pyproject.toml      # Project configuration
└── .pre-commit-config.yaml
```
