# Python Project Template

A modern Python project template with Poetry dependency management and VS Code integration.

## Features

- Poetry for dependency management
- Pre-commit hooks for code quality
- VS Code configuration
- Testing infrastructure
- Type checking support
- GitHub Actions CI/CD (coming soon)

## Getting Started

1. Create a new repository using this template
2. Clone your new repository
3. Install Poetry if you haven't already:
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```
4. Install dependencies:
   ```bash
   poetry install
   ```
5. Activate pre-commit hooks:
   ```bash
   poetry run pre-commit install
   ```

## Development

This template includes:

- Code formatting with Black
- Type checking with mypy
- Linting with flake8
- Testing with pytest
- VS Code integration

## Project Structure

```
.
├── src/                  # Source code
├── tests/               # Test files
├── .vscode/            # VS Code settings
├── pyproject.toml      # Poetry and tool configurations
└── .pre-commit-config.yaml
```
