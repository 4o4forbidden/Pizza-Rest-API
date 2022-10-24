const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/ordersController');

/**
 * @api {post} /orders Create a new order
 * @apiName Create Command
 * @apiGroup Orders
 *
 * @apiBody {String} user User Email.
 * @apiBody {Array} Pizzas  Pizzas.
 * @apiBody {Number} price  Cost of the Pizzas.
 * @apiBody {String} orderIsReady  Status of the order.
 */
router.post('/orders', ordersController.creatOrder);


/**
 * @api {get} /orders List all orders
 * @apiName List All Orders
 * @apiGroup Orders
*/
router.get('/orders', ordersController.listOrders);

/**
 * @api {put} /orders/:orderId Update Order
 * @apiName Update Order
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
 * 
 * @apiBody {String} user User Email.
 * @apiBody {Array} Pizzas  Pizzas.
 * @apiBody {Number} price  Cost of the Pizzas.
 * @apiBody {String} orderIsReady  Status of the order.

*/
router.put('/orders/:orderId', ordersController.updateOrder);

/**
 * @api {delete} /orders/:orderId Delete Order
 * @apiName Delete Order
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
*/
router.delete('/orders/:orderId', ordersController.deleteOrder);

/**
 * @api {post} /orders/:orderId/addPizzas Add Pizzas To Order
 * @apiName Add Pizzas To Order
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
 * 
 * @apiBody {Array} Pizzas. Array of pizzas to add
*/
router.post('/orders/:orderId/addPizzas', ordersController.addPizzasToOrder);

/**
 * @api {post} /orders/:orderId/setReady Set order ready
 * @apiName Set order ready
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
*/
router.post('/orders/:orderId/setReady', ordersController.setOrderReady);

/**
 * @api {get} /orders/:orderId/checkOrderStatus Check order Status
 * @apiName Check order Status
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
*/
router.get('/orders/:orderId/checkOrderStatus', ordersController.checkOrderStatus);

/**
 * @api {get} /orders/:orderId/checkOrderStatus List One Order
 * @apiName List One Order
 * @apiGroup Orders
 * @apiParam {string} orderId User Email who made the order. 
*/
router.get('/orders/:orderId', ordersController.listOneOrder);

module.exports = router;
