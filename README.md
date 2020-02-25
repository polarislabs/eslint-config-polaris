# eslint-config-polaris
eslint package to use across polaris dev projects to maintain same standard of code. Currently only has the Node eslint config, and nothing for React specific.

In project root, run `npm i --save-dev @jeffbumgardner/eslint-config-polaris`.

In project .eslint file, erase anything in there, and replace with: 
 ```
 module.exports = {
  extends: [
    '@jeffbumgardner/polaris', 
  ],
};
```
