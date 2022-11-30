
# use-nanoid
[![package version](https://img.shields.io/npm/v/use-nanoid.svg?style=flat-square)](https://npmjs.org/package/use-nanoid)
[![package downloads](https://img.shields.io/npm/dm/use-nanoid.svg?style=flat-square)](https://npmjs.org/package/use-nanoid)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/use-nanoid.svg?style=flat-square)](https://npmjs.org/package/use-nanoid)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> React hook to generate a random ID using nanoid

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## About

Simple hook to generate an ID using nanoid. If you need SSR, use [@reach/auto-id](https://github.com/reach/reach-ui/tree/develop/packages/auto-id).

## Usage

```js
import React from "react";

import {useNanoid} from 'use-nanoid'

export default function App() {
  const id = useNanoid()
  const otherId  = useNanoid(10) // Length of ID
  const yeahId = useNanoid('1000') // Use provided string as ID

  return (
    <div>
      <h1>{id}</h1>
      <h2>{otherId}</h2>
      <h3>{yeahId}</h3>
    </div>
  );
}

```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install use-nanoid
$ # OR
$ yarn add use-nanoid
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

mit 
    