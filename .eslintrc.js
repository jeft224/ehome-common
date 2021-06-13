module.exports = {
  extends: ['standard', 'plugin:import/errors'],
  plugins: ['import'],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {}
}
