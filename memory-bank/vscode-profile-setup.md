# VS Code Python Profile Setup Plan

## Overview
This plan details the setup of a VS Code profile optimized for Python development using Poetry and UV, with full Pylance integration and GitHub sync capabilities.

## Implementation Plan

```mermaid
graph TD
    A[Backup Current Settings] --> B[Create New Profile]
    B --> C[Configure Python Environment]
    C --> D[Sync Configuration]
    
    subgraph "Initial Backup"
        A --> A1[Export Current Settings]
        A --> A2[List Extensions]
        A --> A3[Backup Roo/Cline Config]
    end
    
    subgraph "Profile Setup"
        B --> B1[Create Python Profile]
        B --> B2[Import Base Settings]
        B --> B3[Configure Extensions]
    end
    
    subgraph "Python Environment"
        C --> C1[Poetry Setup]
        C --> C2[UV Integration]
        C --> C3[Pylance Config]
        C1 --> C1.1[Virtual Env]
        C2 --> C2.1[Package Management]
        C3 --> C3.1[Type Checking]
    end
    
    subgraph "Sync Setup"
        D --> D1[GitHub Sync]
        D --> D2[Multi-machine Config]
        D --> D3[Backup Strategy]
    end
```

## Configuration Details

### 1. Base Profile Settings
```json
{
  "settings.sync": {
    "keybindings": true,
    "extensions": true,
    "userSettings": true
  }
}
```

### 2. Python Environment
```json
{
  "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
  "python.poetry.activateVenv": true,
  "python.packageManager": "poetry",
  "python.analysis.typeCheckingMode": "strict",
  "python.analysis.diagnosticMode": "workspace",
  "python.analysis.autoImportCompletions": true
}
```

### 3. Poetry + UV Integration
```json
{
  "poetry.settings": {
    "virtualenvs.in-project": true,
    "virtualenvs.create": true
  },
  "python.terminal.activateEnvInCurrentTerminal": true,
  "python.terminal.activateEnvironment": true,
  "terminal.integrated.defaultProfile.osx": "bash"
}
```

### 4. Pylance Configuration
```json
{
  "python.analysis.diagnosticSeverityOverrides": {
    "reportGeneralTypeIssues": "error",
    "reportOptionalMemberAccess": "warning",
    "reportOptionalSubscript": "warning"
  },
  "python.analysis.inlayHints.functionReturnTypes": true,
  "python.analysis.inlayHints.variableTypes": true
}
```

### 5. Multi-Machine Sync
```json
{
  "settingsSync.ignoredSettings": [
    "-python.defaultInterpreterPath",
    "-python.condaPath"
  ],
  "settingsSync.ignoredExtensions": [],
  "settingsSync.keybindingsPerPlatform": true
}
```

## Implementation Steps

1. **Backup Phase**
   - Export current VS Code settings
   - Document installed extensions
   - Backup Roo/Cline configurations

2. **Profile Creation**
   - Create new profile "Python Development"
   - Import preserved settings
   - Configure Python-specific settings

3. **Environment Setup**
   - Configure Poetry integration
   - Set up UV package manager
   - Enable Pylance features

4. **Sync Configuration**
   - Enable GitHub settings sync
   - Configure multi-machine settings
   - Set up backup strategy