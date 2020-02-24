module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'build',
    'dist',
    'node_modules',
    'public',
    'typedocs',
    'bak',
    'local',
    'scripts'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['prettier', '@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
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
      ecmaVersion: 2017,
      sourceType: 'module'
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
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'test/**',
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.test.ts',
        '**/*.spec.ts'
      ]
    }
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always'],
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    'no-shadow': 'warn',
    'no-useless-constructor': 'off',
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
    'quote-props': ['error', 'as-needed'],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
  }
};

