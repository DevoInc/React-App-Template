module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es2022: true, // this sets the parserOptions.ecmaVersion option automagically
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      // no need for jsx flag. See https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsecmafeaturesjsx
    },
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  ignorePatterns: ['dist', 'coverage'],
  overrides: [
    // test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'testing-library',
        'jest',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
      ],
      env: {
        'jest/globals': true,
      },
      rules: {
        // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
