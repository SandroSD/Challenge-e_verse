const express = require('express');
const controller = require('../controller/user');

const routes = express.Router();

/**
 * @swagger
 * /users/{id}:
 *  get:
 *   summary: Get User by Id
 *   description: endpoint to get user by id
 *   security:
 *     - bearerAuth: []
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID for the user
 *       schema:
 *         id: integer
 *   responses:
 *     200:
 *       description: get user OK
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
 *     204:
 *       description: user not found
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
routes.get('/users/:id', controller.getById);
/**
 * @swagger
 * /users/{id}:
 *  put:
 *   summary: Update User
 *   description: endpoint to update user
 *   security:
 *     - bearerAuth: []
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
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID for the user
 *       schema:
 *         id: integer
 *   responses:
 *     200:
 *       description: update user OK
 *     400:
 *       description: update user ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
routes.put('/users/:id', controller.update);
/**
 * @swagger
 * /users/:id:
 *  delete:
 *   summary: Delete User by Id
 *   description: endpoint to delete user
 *   security:
 *     - bearerAuth: []
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID for the user
 *       schema:
 *         id: string
 *   responses:
 *     200:
 *       description: delete user OK
 *     400:
 *       description: delete user ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
routes.delete('/users/:id', controller.deleteById);

module.exports = routes;