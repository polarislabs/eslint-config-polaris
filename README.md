# eslint-config-polaris

An eslint package to use across polaris dev projects to maintain same standard of code. It provides a common configuration, as well as a Node and React specific configurations.

This is a Github Package, with a job that will publish to npm when pushed to `master`. Before pushing to `master`, manually update the version in the package.json.

## Usage

In project root, run `npm i --save-dev @polarislabs/eslint-config-polaris`.

In project .eslint file, erase anything in there, and replace with:
 ```
 module.exports = {
  extends: [
    '@polarislabs/polaris',
  ],
};
```
This will use the default JS ESLint rules. If you want Node/React specific, you can instead do:
```
 module.exports = {
  extends: [
    '@polarislabs/polaris/node',
  ],
};
```
or
```
 module.exports = {
  extends: [
    '@polarislabs/polaris/react',
  ],
};
```

## Developing this package locally

In order to do development of this package, install it from another local source code repository so that you can test that it works.

### Make sure that you install the NPM Dev Dependencies for `eslint-config-polaris`

For instance, `typescript` is required. Make sure that `NODE_ENV=development` and do an npm install in the root of `eslint-config-polaris`.

### From the local repo to consume this package:

`npm install ../path/to/eslint-config-polaris`

Add to your `.eslintrc.js` per `Usage` section above.
