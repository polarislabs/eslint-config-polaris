module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
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
  plugins: ['prettier', 'simple-import-sort', 'sort-keys-fix', '@typescript-eslint', 'typescript-sort-keys'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    }
  },
  rules: {
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
    'import/order': 'off',
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
    'sort-keys-fix/sort-keys-fix': 'error',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["class", "export", "function", "multiline-const", "multiline-expression"], next: "*" },
      { blankLine: "always", prev: "*", next: ["class", "export", "function", "multiline-const", "multiline-expression", "return"] }
    ]
  }
};