module.exports = {
    preset: 'react',
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(integration.test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Include any setup files needed
  };
  