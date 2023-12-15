const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const paths = compilerOptions.paths ? compilerOptions.paths : {};

const exclusions = [
  "<rootDir>/src/constants",
  "<rootDir>/src/styles",
  "<rootDir>/src/services/index.ts",
  "<rootDir>/src/useCases/index.ts",
  "config.ts",
  "configs.ts",
  "style.ts",
  "styles.ts",
  "type.ts",
  "types.ts",
];

const inclusions = ["<rootDir>/src/**/*.{js,jsx,ts,tsx}"];

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { isolatedModules: true }],
  },
  globals: {
    TZ: "utc",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
  setupFilesAfterEnv: ["<rootDir>/jest/setup-tests.ts"],
  testMatch: [
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: exclusions,
  collectCoverageFrom: inclusions,
  coverageThreshold: {
    global: {
      lines: 85,
    },
  },
};

module.exports = config;
