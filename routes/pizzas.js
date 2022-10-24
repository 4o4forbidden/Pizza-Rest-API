const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzasController');
const authJwt = require('../middlewares/authJwt');

/**
 * @api {post} /pizzas Create a new pizza
 * @apiName Create Pizza
 * @apiGroup Pizzas
 *
 * @apiBody {String} pizzaType Pizza Name.
 * @apiBody {Number} pizzaPrice  Pizza Price.
 */
router.post('/pizzas', [authJwt.verifyToken], pizzasController.createPizza);

/**
 * @api {get} /pizzas List All Pizzas
 * @apiName List All Pizzas
 * @apiGroup Pizzas
 */
router.get('/pizzas', [authJwt.verifyToken],  pizzasController.listPizzas);

/**
 * @api {put} /pizzas/:pizzaId Update a pizza
 * @apiName Update a pizza
 * @apiGroup Pizzas
 * @apiParam {string} pizzaId The pizza name that you want to change. 
 * 
 * @apiBody {String} pizzaType Pizza Name.
 * @apiBody {Number} pizzaPrice  Pizza Price.
 */
router.put('/pizzas/:pizzaId', [authJwt.verifyToken], pizzasController.updatePizzas);

/**
 * @api {delete} /pizzas/:pizzaId Delete a pizza
 * @apiName Delete a pizza
 * @apiGroup Pizzas
 * @apiParam {string} pizzaId The pizza name that you want to delete. 
 */
router.delete('/pizzas/:pizzaId', [authJwt.verifyToken], pizzasController.deletePizza);

module.exports = router;
