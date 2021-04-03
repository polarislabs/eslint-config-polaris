module.exports = {
  extends: ['airbnb', './common'],
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [{
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    files: ['*.js'],
    plugins: ['prettier'],
    parser: 'espree',
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }],
  rules: {
    'import/no-default-export': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};

