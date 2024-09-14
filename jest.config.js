module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)',
  ],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'), // Resolve axios correctly
  },
};
