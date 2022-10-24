const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PizzaSchema = new Schema({
    pizzaType: {
        type: String
    },
    pizzaPrice: {
        type: Number
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
}, {
    timestamps: true
});


let pizzaSchema = mongoose.model('Pizza', PizzaSchema);

module.exports = pizzaSchema;
