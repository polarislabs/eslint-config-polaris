# eslint-config-polaris
eslint package to use across polaris dev projects to maintain same standard of code. Currently only has the Node eslint config, and nothing for React specific.

In project root, run `npm i --save-dev @POLARISDevTeam/eslint-config-polaris`.

In project .eslint file, erase anything in there, and replace with: 
 ```
 module.exports = {
  extends: [
    '@POLARISDevTeam/polaris', 
  ],
};
```
This is a Github Package, with a job that will publish to npm when pushed to `master`. Before pushing to `master`, manually update the version in the package.json.