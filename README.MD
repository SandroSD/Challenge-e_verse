# Challenge e-verse

## API

### Introduction - The Project's Aim

This API lets you create, update and delete an user, also it allows you to get the information of it.
It has a login with JWT so in order to update, delete or get information you must login.

### Technologies
- Node JS
- Express JS
- Mongo DB
- Winston (logs)
- Swagger (document API)

### How to run this App ?

To run the API you have to change some environment variables

```
PORT: this is the port where API runs.

MONGO_URL: url of the mongo database.

TOKEN_SECRETO: secret token to use on login with JWT.

EXPIRES_IN: expires token time, by default in env is in 180000ms.
```

Then you have to install dependencies using the command.

```
npm install
```
or
```
yarn install
```

To run the API use the command.

```
npm run dev
```