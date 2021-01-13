# CHANGELOG

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