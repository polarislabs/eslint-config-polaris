# CHANGELOG

## 2.0.0
- Update typescript from `3.9.6` to `4.3.5`.
- Update eslint from `6.8.0` to `7.30.0`.
- Version bump all of the eslint config packages and plugins to the latest.
- Change `simple-import-sort/sort` to `simple-import-sort/imports` due to change [upstream](https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/CHANGELOG.md#version-600-2020-11-15).
- Set `@typescript-eslint/ban-types` to `warn` to change the default behaviour (`error`).

## 1.4.1
- Remove auto-assigned reviewer from Github Actions

## 1.4.0
- Added enforcement of the [curly](https://eslint.org/docs/rules/curly) rule. Brackets will be required.

## 1.2.6

- Update README to remove steps needed to consume private package.

## 1.2.1

- Make package public.

## 1.2.0

- Added `eslint-plugin-sort-keys-fix` plugin to provide a sort-keys rule that also provides auto fix of sort-key errors, eslint's own sort-keys rule does not work for auto fixing.
- Added `eslint-plugin-typescript-sort-keys` plugin to provide sort-keys rule for TypeScript types, interfaces, enums.
- Set the above rules to `error` in `common.js`.
- For client code, in `react.js`, set the `import/no-default-export` to `error` to enforce named exports.
- Set the `padding-line-between-statements` to enforce blank line around class, export, function, multiline consts, and multiline expressions, to provide more space for clear reading of the code.