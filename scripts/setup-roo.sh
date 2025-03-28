#!/bin/bash
set -e

echo "Setting up Roo Code..."

# Step 1: Clone RooFlow
echo "Cloning RooFlow..."
rm -rf RooFlow-temp
git clone https://github.com/GreatScottyMac/RooFlow.git RooFlow-temp

# Step 2: Create .roo directory
echo "Creating .roo directory..."
mkdir -p .roo

# Step 3: Copy system prompts
echo "Copying system prompts..."
cp RooFlow-temp/config/.roo/system-prompt-* .roo/

# Step 4: Copy config files
echo "Copying config files..."
cp RooFlow-temp/config/.rooignore RooFlow-temp/config/.roomodes .

# Step 5: Copy scripts
echo "Copying scripts..."
cp RooFlow-temp/config/insert-variables.* .

# Step 6: Run insert variables script
echo "Running insert variables script..."
chmod +x insert-variables.sh
./insert-variables.sh

# Step 7: Cleanup
echo "Cleaning up..."
rm -rf RooFlow-temp

echo "Roo Code setup complete!"