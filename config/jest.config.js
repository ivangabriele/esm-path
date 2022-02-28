export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      useESM: true,
    },
  },
  maxWorkers: '50%',
  preset: 'ts-jest',
  rootDir: '..',
  testMatch: ['**/*.test.ts'],
}
