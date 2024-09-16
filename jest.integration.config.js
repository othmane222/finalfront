module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(integration.test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Adjust this path if necessary
  };
  