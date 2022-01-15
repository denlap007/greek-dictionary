# greek-dictionary-bot
**Telegram Bot** for greek dictionary, using as source https://www.greek-language.gr

## Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Quickstart](#quickstart)
  - [Docker](#docker)
      - [Run docker container](#run-docker-container)
  - [Online Bot](#online-bot)
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

## Online Bot
Send message to a deployed [telegram bot](https://telegram.me/greekdictionary_bot) instance

## License
Licensed under GPL v3.0
