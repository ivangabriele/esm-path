export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleFileExtensions: ['js', 'ts'],
  maxWorkers: '50%',
  rootDir: '..',
  testMatch: ['**/*.test.ts'],
  transform: {
    '.*\\.(j|t)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [],
}
