# Python Project Template

A modern Python project template with Poetry, UV, and comprehensive development tools.

## Features

- 📦 Modern dependency management with Poetry and UV
- ✨ Code formatting with Black and isort
- 🔍 Static type checking with Mypy
- 🐛 Linting with Flake8 and Pylint
- 🧪 Testing with pytest and coverage reporting
- 🔄 Pre-commit hooks for code quality
- 🚀 GitHub Actions CI/CD pipeline
- 💻 VS Code integration with Pylance

## Prerequisites

- Python 3.9 or higher
- [Poetry](https://python-poetry.org/docs/#installation)
- [UV](https://github.com/astral-sh/uv) (optional, for faster dependency resolution)

## Quick Start

1. Create a new project:

   ```bash
   # Create project from template
   git clone https://github.com/yourusername/python-project-template.git your-project
   cd your-project

   # Initialize git
   rm -rf .git
   git init
   ```

2. Update project configuration:

   ```bash
   # Update project name and author in pyproject.toml
   sed -i '' 's/${PROJECT_NAME}/your-project-name/' pyproject.toml
   sed -i '' 's/${AUTHOR_NAME}/Your Name/' pyproject.toml
   sed -i '' 's/${AUTHOR_EMAIL}/your.email@example.com/' pyproject.toml
   ```

3. Set up development environment:

   ```bash
   # Install dependencies with Poetry
   poetry install

   # Initialize pre-commit hooks
   poetry run pre-commit install
   ```

## Development Setup

### VS Code Configuration

1. Install required extensions:

   - Python
   - Pylance
   - Python Test Explorer
   - Git History
   - GitHub Pull Requests

2. Configure VS Code settings:
   ```json
   {
     "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
     "python.analysis.typeCheckingMode": "strict",
     "python.formatting.provider": "black",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.organizeImports": true
     }
   }
   ```

### Running Tests

```bash
# Run tests with coverage
poetry run pytest

# View coverage report
poetry run pytest --cov-report=html
```

### Code Quality Checks

```bash
# Format code
poetry run black .
poetry run isort .

# Run linters
poetry run flake8
poetry run pylint src tests

# Type checking
poetry run mypy src tests
```

## Project Structure

```
your-project/
├── src/
│   └── your_project/
│       ├── __init__.py
│       └── # Your source files
├── tests/
│   ├── __init__.py
│   └── # Your test files
├── .github/
│   └── workflows/
│       └── ci.yml
├── .pre-commit-config.yaml
├── pyproject.toml
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Install development dependencies with `poetry install`
4. Make your changes
5. Run tests and quality checks:
   ```bash
   poetry run pre-commit run --all-files
   poetry run pytest
   ```
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
