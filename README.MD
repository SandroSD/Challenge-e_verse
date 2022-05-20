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

MONGO_URL: url of the mongo database. (for example if you run this in your local machine you can use this url mongodb://localhost/<name_of_database>)

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
or
```
yarn dev
```

---

## WEB

### Introduction - The Project's Aim

This WEB lets you create a new user to login with it, and you can see an implementation of the library three.js using react.js where you can change the shape and colour.

### Technologies
- React JS
- React Hooks
- Three JS

### How to run this App ?

To run the WEB you have to change some environment variables

```
REACT_APP_URL_API: url of the API of this project (for example: http://localhost:8000).
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
npm start
```
or
```
yarn dev
```