# Python Template VSCode Capabilities

When you use this template for a new workspace, you get:

## Modern Package Management

1. **Hybrid Package Management**

   - Poetry manages dependencies in pyproject.toml
   - UV handles package installation and virtual environments
   - Get both robust dependency resolution and fast installations

2. **Performance Benefits**
   - Up to 100x faster package installations with UV
   - Efficient virtual environment management
   - Lower memory usage during installations

## Development Environment

1. **VS Code Integration**

   - Pre-configured Python settings
   - Virtual environment auto-detection
   - Integrated debugging support
   - Type hint support

2. **Code Quality Tools**

   - Black code formatting
   - Mypy type checking
   - Ruff linting
   - Pre-commit hooks

3. **Testing Infrastructure**
   - Pytest configuration
   - Code coverage support
   - Test discovery

## Quick Start

1. **Initial Setup**

   ```bash
   # Clone template
   git clone <your-new-repo>
   cd <your-new-repo>

   # Install UV
   curl -sSL https://github.com/astral-sh/uv/releases/download/0.6.5/uv-installer.sh | sh

   # Create environment and install dependencies
   uv venv
   uv pip install -e ".[dev]"
   ```

2. **Start Development**
   - VS Code will automatically:
     - Detect your virtual environment
     - Enable type checking
     - Configure formatting
     - Set up debugging

## Workflow Benefits

1. **Fast Development Cycle**

   - Quick dependency installations
   - Instant environment setup
   - Automated code quality checks

2. **Code Quality**

   - Consistent formatting
   - Static type checking
   - Automated testing
   - Git hooks for quality control

3. **Maintainability**
   - Clear project structure
   - Dependency management best practices
   - Built-in documentation support

This template provides a professional, efficient, and maintainable Python development environment that's ready to use immediately after cloning.
