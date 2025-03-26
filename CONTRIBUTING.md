# Contributing to Python Project Template

Thank you for considering contributing to the Python Project Template! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/python-project-template.git
   cd python-project-template
   ```
3. Set up development environment:
   ```bash
   poetry install
   poetry run pre-commit install
   ```

## Development Workflow

1. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

2. Make your changes

3. Run tests and quality checks:

   ```bash
   poetry run pytest
   poetry run pre-commit run --all-files
   ```

4. Commit your changes:

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. Push to your fork:

   ```bash
   git push origin feature-name
   ```

6. Create a Pull Request

## Code Quality Standards

- All code must pass pre-commit checks
- Maintain 100% test coverage
- Follow PEP 8 style guidelines
- Include type hints
- Add docstrings for all functions, classes, and modules

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md if applicable
5. Wait for review and address feedback

## Questions or Issues?

Open an issue in the GitHub repository for any questions or problems.

Thank you for contributing!
