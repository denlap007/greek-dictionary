# greek-dictionary-bot
Telegram Bot for greek dictionary, using as source https://www.greek-language.gr

## Contents

- [greek-dictionary-bot](#greek-dictionary-bot)
  - [Contents](#contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Quickstart](#quickstart)
  - [Docker](#docker)
      - [Run docker container](#run-docker-container)
  - [License](#license)

## Requirements

Node.js **v16** or higher

## Installation

```js
npm install
```

## Quickstart

```js
npm start
```

## Docker

The application is dockerized and can be run by starting a container.

#### Run docker container

Set the BOT_TOKEN environment variable at runtime

```sh
docker run -d --name greek-dictionary-bot -e "BOT_TOKEN=<THE BOT TOKEN>" denlap/greek-dictionary-bot
```

## License

Licensed under [GPL v3.0]

[gpl v3.0]: https://hapi.dev/
[localhost:3000/api-doc]: http://localhost:3000/api-doc
