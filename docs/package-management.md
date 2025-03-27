# Package Management Strategy

## Overview

This project uses a hybrid approach combining Poetry and UV:

### Poetry (Dependency Management)

- Manages dependencies in pyproject.toml
- Handles version constraints
- Creates lock files
- Updates dependencies

### UV (Installation & Environments)

- Fast package installation
- Virtual environment management
- Development tool execution
- CI/CD optimization

## Basic Usage

```bash
# Initial setup
uv venv
uv pip install -e .

# Development setup
uv pip install -e ".[dev]"

# Run tools
uv pip run pytest
```

## Why This Approach?

- Poetry provides robust dependency management
- UV offers significantly faster installations
- Maintained compatibility with Python ecosystem
- Better development experience
