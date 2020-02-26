module.exports = {
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
      plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
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