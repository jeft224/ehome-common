module.exports = {
  extends: ['standard', 'plugin:import/errors', 'plugin:import/warn'],
  plugins: ['import'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {},
}
