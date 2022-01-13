const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");

const { compilerOptions } = require("./tsconfig");

/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
const config = {
  collectCoverage: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),
};

module.exports = nextJest()(config);
