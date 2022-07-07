module.exports = {
  root: true, // we don't want this config to use it's parent because it includes typescript rules
  env: {
    node: true,
    browser: true,
    es2022: true, // this sets the parserOptions.ecmaVersion option automagically
  },
  plugins: [],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
};
