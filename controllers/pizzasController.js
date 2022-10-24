const { Pizza } = require('../models');
const PizzasService = require('../services/PizzasService');
const pizzasServices = new PizzasService({ Pizza });

const createPizza = async function(req, res, next) {

    let createPizzaProcess = await pizzasServices.creatPizza(req.body);

    return res.status(201).send(createPizzaProcess);
};

const listPizzas = async function(req, res, next) {

    let listPizzasProcess = await pizzasServices.listPizzas(req.query);

    return res.status(200).send(listPizzasProcess);
};

const updatePizzas = async function(req, res, next) {

    let updatePizzasProcess = await pizzasServices.updatePizzas(req.params.pizzaId, req.body);

    return res.status(200).send(updatePizzasProcess);
};

const deletePizza = async function(req, res, next) {

    let deletePizzaProcess = await pizzasServices.deletePizza(req.params.pizzaId);

    return res.status(200).send(deletePizzaProcess);
};

module.exports = {
    createPizza,
    listPizzas,
    updatePizzas,
    deletePizza,
}
