module.exports = {
  extends: './common',
  env: {
    jest: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
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
  }]
};
  
  