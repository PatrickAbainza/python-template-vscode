#!/bin/bash
set -e

# Get arguments
PROJECT_NAME=$1
PROJECT_PATH=$2

# Validate inputs
if [ -z "$PROJECT_NAME" ] || [ -z "$PROJECT_PATH" ]; then
    echo "Error: Project name and path are required"
    exit 1
fi

# Create project directory
FULL_PATH="$PROJECT_PATH/$PROJECT_NAME"
if [ -d "$FULL_PATH" ]; then
    echo "Error: Directory $FULL_PATH already exists"
    exit 1
fi

# Clone template
echo "Cloning template..."
git clone https://github.com/PatrickAbainza/python-template-vscode.git "$FULL_PATH"

# Remove existing git history and initialize new repository
cd "$FULL_PATH"
rm -rf .git
git init

# Update project name in pyproject.toml
sed -i '' "s/python-project-template/$PROJECT_NAME/g" pyproject.toml

echo "Project template cloned and initialized at $FULL_PATH"