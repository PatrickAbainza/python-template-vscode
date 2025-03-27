#!/bin/bash
set -e

echo "Setting up development environment..."

# Check if UV is installed
if ! command -v uv &> /dev/null; then
    echo "Installing UV..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
fi

# Create virtual environment and install dependencies
echo "Creating virtual environment..."
uv venv

# Install dependencies
echo "Installing dependencies..."
uv pip install -e ".[dev]"

# Install pre-commit hooks
echo "Setting up pre-commit hooks..."
uv pip install pre-commit
pre-commit install

# Verify installation
echo "Verifying installation..."
uv pip list

echo "Environment setup complete!"
echo "To activate the environment, run: source .venv/bin/activate"