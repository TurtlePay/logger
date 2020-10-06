# TurtlePay® logger Helper Library

![Prerequisite](https://img.shields.io/badge/node-%3E%3D12-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/TurtlePay/logger#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/TurtlePay/logger/graphs/commit-activity) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/TurtlePay/logger/blob/master/LICENSE) [![Twitter: TurtlePay](https://img.shields.io/twitter/follow/TurtlePay.svg?style=social)](https://twitter.com/TurtlePay)

[![NPM](https://nodeico.herokuapp.com/@turtlepay/logger.svg)](https://npmjs.com/package/@turtlepay/logger)

#### Master Build Status
[![Build Status](https://github.com/turtlepay/logger/workflows/CI%20Build%20Tests/badge.svg?branch=master)](https://github.com/turtlepay/logger/actions)

#### Development Build Status
[![Build Status](https://github.com/turtlepay/logger/workflows/CI%20Build%20Tests/badge.svg?branch=development)](https://github.com/turtlepay/logger/actions)

## Overview

Provides an easy to use Logger interface that helps make our logging consistent

## Prerequisites

- node >= 12

## Documentation

Full library documentation is available at [https://logger.turtlepay.dev](https://logger.turtlepay.dev)

## Install

```sh
yarn install @turtlepay/logger
```

## Usage

```typescript
import { Logger } from '@turtlepay/logger';

Logger.info('This is a test');

Logger.error('This is an error: %s', (new Error('some error')).toString());
```

## Run tests

```sh
yarn test
```

## Author

👤 **TurtlePay® Development Team**

* Twitter: [@TurtlePay](https://twitter.com/TurtlePay)
* Github: [@TurtlePay](https://github.com/TurtlePay)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/TurtlePay/logger/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2018-2020 [TurtlePay® Development Team](https://github.com/TurtlePay).

This project is [MIT](https://github.com/TurtlePay/logger/blob/master/LICENSE) licensed.
