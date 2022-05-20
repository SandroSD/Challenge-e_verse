const express = require('express');
const controllerAuth = require('../controller/public');
const controllerUser = require('../controller/user');

const routes = express.Router();
/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: Login
 *   description: endpoint to do a login
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *   responses:
 *     200:
 *       description: login response OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     description: session's token
 *                   user:
 *                     type: object
 *                     properties:
 *                       first_name:
 *                         type: string
 *                       last_name:
 *                         type: string
 *                       email:
 *                         type: string
 *     400:
 *       description: login response ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
routes.post('/auth/login', controllerAuth.login);

/**
 * @swagger
 * /users:
 *  post:
 *   summary: Create User
 *   description: endpoint to create user
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *            first_name:
 *              type: string
 *            last_name:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *   responses:
 *     200:
 *       description: create user OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     400:
 *       description: create user OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
routes.post('/users', controllerUser.create);

module.exports = routes;