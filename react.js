module.exports = {
  extends: './common',
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
      '@typescript-eslint/no-var-requires': 'off'
    }
  }],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: ['error', {
    'ignoreDestructuring': true
    }],
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    'import/extensions': [2, {
      'json': 'always',
    }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'warn'
  }
};

