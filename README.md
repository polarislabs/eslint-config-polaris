# eslint-config-polaris
eslint package to use across polaris dev projects to maintain same standard of code. Currently only has the Node eslint config, and nothing for React specific.

This is a Github Package, with a job that will publish to npm when pushed to `master`. Before pushing to `master`, manually update the version in the package.json.

## Setup

To setup your computer to be able to run `npm install` without errors, follow these steps.

### Create a Personal access token

This will be given to npm in a future step to authenticate to Github Packages.

- Go to https://github.com/settings/tokens
- Click *Generate new token*
- Under Note, give it a name like `npm login token`
- Select the privileges `repo` and `read:packages`
- Click *Generate token*, and leave the tab open for the next step

### Log in to Github Packages with npm

- Run `npm login --registry=https://npm.pkg.github.com`
- For *Username*, enter your Github username
- For *Password*, copy/paste the token you just created
- For *Email*, put in your `...@polarislabs.com` email (you might need to add your email to your Github profile if this fails)

### Add Github Packages as an npm registry

To add the registry to npm, run:

```
npm config set @polarislabs:registry https://npm.pkg.github.com/polarislabs
```

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