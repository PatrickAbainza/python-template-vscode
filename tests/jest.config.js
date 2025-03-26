/**
 * Jest configuration for browser-tools-mcp tests
 */

module.exports = {
    // Test environment
    testEnvironment: 'node',

    // Test match patterns
    testMatch: [
        "**/tests/**/*.test.js",
        "**/tests/**/browser-tools-tests.js"
    ],

    // Coverage configuration
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!jest.config.js"
    ],

    // Test timeout
    testTimeout: 30000,

    // Setup files
    setupFilesAfterEnv: ['./jest.setup.js'],

    // Verbose output
    verbose: true,

    // Coverage thresholds
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};