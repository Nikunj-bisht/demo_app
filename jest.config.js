module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ["node_modules/(?!react-native-settings-list)/"],
    setupFiles: [
      "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    // collectCoverage: true,
    // collectCoverageFrom: ['src/**/*.ts','!src/*/screens']
  };