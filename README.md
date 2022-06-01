<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# TypeScript Node.js DDD Template

[![repo][repo-badge]][repo]
[![repo][language-badge]][repo]
[![License][license-badge]][license]
[![repo][stars-badge]][repo]

This project is a template repo to start new projects from scratch without
wasting time configurating and setting up folders & files.

It may has some specific folders and definitions that you won't use or will
prefer to use other ways: **feel free to do so**.

Status: 🚀 Done 🚀

[Getting started](#-getting-started) •
[Features](#-features) •
[Packages](#-packages) •
[Folders structure](#-folders-structure) •
[Contribute](#-contribute) •
[License](#-license) •

</div>

## 🚀 Getting started

This project is not an application: **this is a boilerplate/template/pattern, whatever you want to call**.

To use it, go to repo's homepage and click on [Use this template][template-button] button.

---

## 📃 Features

This project is good to go with several libraries, frameworks and tools:

- **TypeScript** support;
- **Express** and **Express async errors** handling support;
- **CommitLint** and **Commitizen** friendly;
- **Husky** git hooks to prevent commits out of [Conventional Commits][conventional-commits];
- **ESLint** and **Prettier** to code pattern formatting;
- **Jest** for unit testing;
- **Conventional Changelog** for tagging and documentation;
- **Swagger** for API documentation;
- **Babel** for packaging;
- **and much more...**

## 📦 Packages

The following packages are already installed on this template:

> 💡 The packages versions may or may not be updated.

- **[express][express]**
- **[express-async-errors][express-async-errors]**
- **[swagger-ui-express][swagger-ui-express]**
- **[babel][babel]**
- **[babel-plugin-module-resolver][babel-plugin-module-resolver]**
- **[cz-conventional-changelog][cz-conventional-changelog]**
- **[eslint][eslint]**
- **[@typescript-eslint/eslint-plugin][@typescript-eslint/eslint-plugin]**
- **[@typescript-eslint/parser][@typescript-eslint/parser]**
- **[eslint-config-airbnb-base][eslint-config-airbnb-base]**
- **[eslint-config-prettier][eslint-config-prettier]**
- **[eslint-import-resolver-typescript][eslint-import-resolver-typescript]**
- **[eslint-plugin-import][eslint-plugin-import]**
- **[eslint-plugin-import-helpers][eslint-plugin-import-helpers]**
- **[eslint-plugin-jest][eslint-plugin-jest]**
- **[eslint-plugin-prettier][eslint-plugin-prettier]**
- **[husky][husky]**
- **[@commitlint/config-conventional][@commitlint/config-conventional]**
- **[@commitlint/cli][@commitlint/cli]**
- **[jest][jest]**
- **[prettier][prettier]**
- **[standard-version][standard-version]**
- **[ts-jest][ts-jest]**
- **[ts-node][ts-node]**
- **[ts-node-dev][ts-node-dev]**
- **[tsconfig-paths][tsconfig-paths]**
- **[typescript][typescript]**

> See [package.json][package.json] for package version and more.

---

## 📂 Folders structure

> 💡 Feel free to customize, add and delete folders. This is just an idea. Keep in mind Uncle Bob's definitions about Clean Arch and you will be fine.

### 📁 src/@types

This folder should contain all typing files. Example: `express.d.ts` that will overwrite a type from Express lib.

### 📁 src/application

This folder should contain all application files: `server.ts`, routes files, application exceptions, etc.

### 📁 src/config

This folder should contain all config files. Example: environment configs, specific libraries configs, AWS region configs, etc.

### 📁 src/docs

This folder should contain all documentation files. Example: `swagger.json`, Insomnia or Postman collections, etc.

### 📁 src/domains

This folder should contain a folder for each domain that your software has.
`_shared` folder should contain files that are shared between domains (types, constants, gateways, etc.)

Each domain has:

- `entities`
- `enums`
- specific `exceptions`
- `gateways`:
  - `producers` (queues)
  - `publishers` (topics)
  - `repositories` (interfaces)
  - `services` (interfaces)
- `helpers`
- `templates` (email, csv, etc.)
- `usecases` (business logic, rules)

### 📁 src/infra

This folder should contain all infrastructure files. `_shared` folder should contain files that are shared between the project (types, exceptions, services, utils, etc.).

Infra folder has:

- `controllers` (for each domain)
- `factories` (design pattern impl)
- `presenters` (design pattern impl)
- `producers` (queues impl)
- `publishers` (topics impl)
- `repositories` (databases, orms impl)
- `services` (impl)
- `templates`
- `utils`

### 📁 ./tests

This folder should contain all tests files subdivided into `domains` and `infra` main folders.

### 📁 ./tmp

This folder should contain all temporary files, it must be always empty. Temporary files should be excluded on application runtime.

---

## 💪 Contribute

1. **Fork** the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`
   > If you have any questions check this guide on [how to contribute](./CONTRIBUTING.md)

---

## 📝 License

This project is under the license [MIT](./LICENSE).

Made with ❤️ by Henrique Balmant 👋🏻 [Get in touch!][linkedin]

<!-- Links --->

[repo]: https://github.com/henbalmant/typescript-nodejs-ddd-template
[repo-badge]: https://img.shields.io/github/package-json/v/henbalmant/typescript-nodejs-ddd-template?style=flat-square
[license]: https://github.com/henbalmant/typescript-nodejs-ddd-template/blob/main/LICENSE
[license-badge]: https://img.shields.io/github/license/henbalmant/typescript-nodejs-ddd-template?color=lightgray&style=flat-square
[language-badge]: https://img.shields.io/github/languages/top/henbalmant/typescript-nodejs-ddd-template?style=flat-square
[stars-badge]: https://img.shields.io/github/stars/henbalmant/typescript-nodejs-ddd-template?style=flat-square&color=yellow
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[template-button]: https://github.com/henbalmant/typescript-nodejs-ddd-template/generate
[package.json]: https://github.com/henbalmant/typescript-nodejs-ddd-template/blob/master/package.json
[linkedin]: https://www.linkedin.com/in/henrique-balmant/
[express]: https://expressjs.com/
[express-async-errors]: https://www.npmjs.com/package/express-async-errors
[swagger-ui-express]: https://www.npmjs.com/package/swagger-ui-express
[babel]: https://babeljs.io/
[babel-plugin-module-resolver]: https://www.npmjs.com/package/babel-plugin-module-resolver
[cz-conventional-changelog]: https://github.com/commitizen/cz-conventional-changelog
[eslint]: https://eslint.org/
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
[eslint-config-prettier]: https://www.npmjs.com/package/eslint-config-prettier
[eslint-import-resolver-typescript]: https://www.npmjs.com/package/eslint-import-resolver-typescript
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-import-helpers]: https://www.npmjs.com/package/eslint-plugin-import-helpers
[eslint-plugin-jest]: https://www.npmjs.com/package/eslint-plugin-jest
[eslint-plugin-prettier]: https://www.npmjs.com/package/eslint-plugin-prettier
[husky]: https://typicode.github.io/husky/#/
[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
[@commitlint/cli]: https://www.npmjs.com/package/@commitlint/cli
[jest]: https://jestjs.io/pt-BR/
[prettier]: https://prettier.io/
[standard-version]: https://github.com/conventional-changelog/standard-version
[ts-jest]: https://www.npmjs.com/package/ts-jest
[ts-node]: https://www.npmjs.com/package/ts-node
[ts-node-dev]: https://github.com/TypeStrong/ts-node
[tsconfig-paths]: https://www.npmjs.com/package/tsconfig-paths
[typescript]: https://www.typescriptlang.org/
