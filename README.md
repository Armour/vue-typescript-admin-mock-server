# vue-typescript-admin-mock-server

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.svg)](https://github.com/Armour/Jarvis)

Mock server for [vue-typecript-admin-template](https://github.com/Armour/vue-typescript-admin-template) project

## Demo link

[Demo](https://vue-typescript-admin-mock-server.armour.now.sh/mock-api/v1/transactions) (used by vue-typecript-admin-template)

## Overview

The javascript code under `mock` folder in this project was generated from the typescript source code located at [here](https://github.com/Armour/vue-typescript-admin-template/tree/full-features/mock)

## Swagger

The url schema is based on [Swagger config file](https://github.com/Armour/vue-typescript-admin-template/blob/full-features/mock/swagger.yml) and follows REST api standard.

```txt
info: {
  name: 'Mock API',
  description: 'Mock API for vue-typescript-admin-template.',
  version: '1.0.0'
},
paths: {
  get: [
    '/mock-api/v1/articles',
    '/mock-api/v1/articles/:id',
    '/mock-api/v1/pageviews',
    '/mock-api/v1/transactions',
    '/mock-api/v1/roles',
    '/mock-api/v1/routes',
    '/mock-api/v1/users',
    '/mock-api/v1/users/:username'
  ],
  post: [
    '/mock-api/v1/articles',
    '/mock-api/v1/roles',
    '/mock-api/v1/users/register',
    '/mock-api/v1/users/login',
    '/mock-api/v1/users/logout',
    '/mock-api/v1/users/info'
  ],
  put: [
    '/mock-api/v1/articles/:id',
    '/mock-api/v1/roles/:id',
    '/mock-api/v1/users/:username'
  ],
  delete: [
    '/mock-api/v1/articles/:id',
    '/mock-api/v1/roles/:id',
    '/mock-api/v1/users/:username'
  ]
}
```

## Try it on your own computer

First install all dependencies:

```bash
yarn # OR npm install
```

Then you can set up the server:

```bash
yarn mock # OR npm run mock
```

## Contributing

See [CONTRIBUTING.md](https://github.com/Armour/vue-typescript-admin-mock-server/blob/master/.github/CONTRIBUTING.md)

## License

[MIT License](https://github.com/Armour/vue-typescript-admin-mock-server/blob/master/LICENSE)
