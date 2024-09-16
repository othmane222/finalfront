module.exports = {
    preset: 'react-native',
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(integration.test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Include any setup files needed
  };
  