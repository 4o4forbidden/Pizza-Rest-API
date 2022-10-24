const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.String,
        ref: 'User'
    },
    pizzas: [{
        type: mongoose.Schema.Types.String,
        ref: 'Pizza'
    }],
    orderIsReady: {
        type: Boolean
    },
    price: {
        type: Number,
    },
}, {
    timestamps: true
});

let orderSchema = mongoose.model('Order', OrderSchema);

module.exports = orderSchema;
