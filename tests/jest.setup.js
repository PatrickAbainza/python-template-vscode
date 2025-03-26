/**
 * Jest setup file for browser-tools-mcp tests
 * Configures global test timeouts and environment variables
 */

// Increase timeout for browser operations
jest.setTimeout(30000);

// Configure test environment variables
process.env.TEST_BROWSER_HEADLESS = 'true';
process.env.TEST_BROWSER_SLOWMO = '0';
process.env.MCP_SERVER_PORT = '8080';
process.env.BROWSER_TOOLS_PORT = '3025';

// Add fetch polyfill for Node.js environment
global.fetch = require('node-fetch');

// Custom test environment setup
beforeAll(async () => {
    console.log('Starting browser-tools-mcp test suite...');
    
    // Wait for servers to be ready
    const waitForServer = async (url, maxAttempts = 5) => {
        for (let i = 0; i < maxAttempts; i++) {
            try {
                await fetch(url);
                return true;
            } catch (error) {
                if (i === maxAttempts - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
    };

    try {
        await waitForServer(`http://127.0.0.1:${process.env.BROWSER_TOOLS_PORT}/.identity`);
        console.log('Browser Tools Server is ready');
    } catch (error) {
        console.error('Failed to connect to Browser Tools Server:', error);
        throw error;
    }
});

// Custom test environment teardown
afterAll(async () => {
    console.log('Completed browser-tools-mcp test suite.');
    // Allow time for WebSocket connections to close gracefully
    await new Promise(resolve => setTimeout(resolve, 1000));
});

// Custom error handling for unhandled promises
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Promise Rejection:', error);
});