const { Order, Pizza } = require('../models');
const OrdersService = require('../services/OrdersService');
const ordersService = new OrdersService({ Order, Pizza });

const creatOrder = async function(req, res, next) {

    let creatOrderProcess = await ordersService.creatOrder(req.body);

    return res.status(201).send(creatOrderProcess);
};

const listOrders = async function(req, res, next) {

    let listOrdersProcess = await ordersService.listOrders();

    return res.status(200).send(listOrdersProcess);
};

const updateOrder = async function(req, res, next) {

    let updateOrderProcess = await ordersService.updateOrder(req.params.orderId, req.body);

    return res.status(200).send(updateOrderProcess);
};

const deleteOrder = async function(req, res, next) {

    let deleteOrderProcess = await ordersService.deleteOrder(req.params.orderId);

    return res.status(200).send(deleteOrderProcess);
};

const listOneOrder = async function(req, res, next) {

    let listOneOrderProcess = await ordersService.listOneOrder(req.params.orderId);

    return res.status(200).send(listOneOrderProcess);
};


const addPizzasToOrder = async function(req, res, next) {

    let addPizzasToOrderProcess = await ordersService.addPizzasToOrder(req.params.orderId, req.body);

    return res.status(200).send(addPizzasToOrderProcess);
};

const checkOrderStatus = async function(req, res, next) {

    let checkOrderStatusProcess = await ordersService.checkOrderStatus(req.params.orderId, req.body);

    return res.status(200).send(checkOrderStatusProcess);
};

const setOrderReady = async function(req, res, next) {

    let setOrderReadyProcess = await ordersService.setOrderReady(req.params.orderId, req.body);

    return res.status(200).send(setOrderReadyProcess);
};



module.exports = {
    creatOrder,
    listOrders,
    updateOrder,
    deleteOrder,
    listOneOrder,
    addPizzasToOrder,
    checkOrderStatus,
    setOrderReady

}
