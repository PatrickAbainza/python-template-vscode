# Python Project Template

A modern Python project template with Poetry for dependency management, UV for fast installations (10-100x faster), and VS Code integration.

## Key Features

- **Fast Package Management**

  - Poetry for dependency management
  - UV for rapid installations
  - Efficient virtual environments

- **Development Tools**

  - VS Code integration
  - Pre-commit hooks
  - Type checking (mypy)
  - Code formatting (black)
  - Linting (ruff)

- **Testing Infrastructure**
  - Pytest configuration
  - Code coverage support
  - VS Code test integration

## Getting Started

1. Create a new repository using this template
2. Clone your new repository
3. Install UV:
   ```bash
   curl -sSL https://github.com/astral-sh/uv/releases/download/0.6.5/uv-installer.sh | sh
   ```
4. Set up your environment:
   ```bash
   uv venv
   uv pip install -e ".[dev]"
   ```
5. Start developing! VS Code is pre-configured for:
   - Python development
   - Code formatting
   - Type checking
   - Testing

## Documentation

- [Package Management Strategy](docs/package-management.md)
- [Project Capabilities](docs/capabilities.md)

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
