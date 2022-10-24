const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const authJwt = require('../middlewares/authJwt');

/**
 * @api {post} /users Create a new user
 * @apiName Create User
 * @apiGroup Users
 *
 * @apiBody {String} firstname Firstname of the User.
 * @apiBody {String} lastname  Lastname of the User.
 * @apiBody {String} email  Email of the User.
 * @apiBody {String} password  Password of the User.
 */
router.post('/users', [authJwt.verifyToken], usersController.createUser);

/**
 * @api {get} /users List all users
 * @apiName List Users
 * @apiGroup Users
*/
router.get('/users', [authJwt.verifyToken],  usersController.listUsers);

/**
 * @api {put} /users/:userId Update a user
 * @apiName Update User
 * @apiGroup Users
 * @apiParam {int} userId Email of the user to update. 
 *
 * @apiBody {String} firstname Firstname of the User.
 * @apiBody {String} lastname  Lastname of the User.
 * @apiBody {String} email  Email of the User.
 * @apiBody {String} password  Password of the User.
 */
router.put('/users/:userId', [authJwt.verifyToken], usersController.updateUsers);

/**
 * @api {delete} /users/:userId Delete a user
 * @apiName Delete User
 * @apiGroup Users
 * @apiParam {int} userId Email of the user to delete. 
 */
router.delete('/users/:userId', [authJwt.verifyToken], usersController.deleteUser);

/**
 * @api {post} /login Login a user
 * @apiName Login
 * @apiGroup Users
 *
 * @apiBody {String} email Email of the User.
 * @apiBody {String} password  Password of the User.
 */
router.post('/login', usersController.loginUser);

module.exports = router;
