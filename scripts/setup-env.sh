#!/bin/bash
set -e

echo "Setting up development environment..."

# Check if UV is installed
if ! command -v uv &> /dev/null; then
    echo "Installing UV..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
fi

# Check if Poetry is installed
if ! command -v poetry &> /dev/null; then
    echo "Installing Poetry..."
    curl -sSL https://install.python-poetry.org | python3 -
fi

# Create virtual environment and install dependencies
echo "Creating virtual environment..."
uv venv

# Install dependencies with UV
echo "Installing dependencies with UV..."
uv pip install -e ".[dev]"

# Update Poetry dependencies
echo "Updating Poetry dependencies..."
poetry lock  # Generate/update the lock file
poetry install --sync  # Install dependencies and sync with lock file

# Install pre-commit hooks
echo "Setting up pre-commit hooks..."
uv pip install pre-commit
pre-commit install

# Verify installation
echo "Verifying installation..."
echo "UV version:"
uv --version
echo "Poetry version:"
poetry --version
echo "Installed packages:"
uv pip list

echo "Environment setup complete!"
echo "To activate the environment, run: source .venv/bin/activate"