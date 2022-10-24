class OrdersService {

    constructor({ Order, Pizza }) {
        this.orderModel = Order;
        this.pizzaModel = Pizza;
    }

    async creatOrder(data) {
        // Check if order exists
        let _order = await this.orderModel.findOne({
            user: data.user
        });

        if (_order) {
            return {
                message: 'Failed! Order already exists!'
            };
        } else {
            _order = new this.orderModel(data);
            await _order.save();

            return {
                message: `Order  [ ${(data.pizzas).join(', ')} ] by User associated with Email -> ${data.user} created successfully!`
            };
        }
    }

    async listOrders() {
        let _orders = await this.orderModel.find().exec();

        return {
            orders: _orders
        };
    }

    async listOneOrder(orderId) {
        let _order = await this.orderModel.findById(orderId).populate('pizzas').exec();

        if (_order) {
            return {
                order: _order
            };
        } else {
            return {
                message: 'Order Not Found!'
            };
        }
    }

    async updateOrder (userEmail, data) {
        // Check if order exists
        let _order = await this.orderModel.findOne({user:userEmail}).exec();

        if (_order) {
            _order.pizzas = data.pizzas ? data.pizzas : _order.pizzas;
            _order.price = data.price ? data.price : _order.price;
            _order.orderIsReady = data.orderIsReady ? data.orderIsReady : _order.orderIsReady;

            _order = await _order.save();

            return {
                message: 'Order Updated Successfully!',
                order: _order
            };
        } else {
            return {
                message: 'Failed! Order Not Found!'
            };
        }
    }

    async deleteOrder(userEmail) {
        await this.orderModel.findOneAndRemove({user:userEmail});

        return {
            message: 'Order Deleted Successfully!'
        };
    }

    async addPizzasToOrder(userEmail, data) {
        // Check if order exists
        let _order = await this.orderModel.findOne({user:userEmail}).exec();

        if (_order) {
            for (let i = 0; i < data.pizzas.length; i++) {
                let _pizza = await this.pizzaModel.findOne({
                    pizzaType: data.pizzas[i]
                }).exec();

                if (_pizza) {
                    _order.pizzas.push(_pizza.pizzaType);
                }
                await _order.save();
            }

            return {
                message: 'Pizza(s) added to order successfully!'
            };
        } else {
            return {
                message: 'Failed! Order Not Found!'
            };
        }
    }

    async setOrderReady(userEmail){
        let _order = await this.orderModel.findOne({user:userEmail}).exec();
        if(_order){
            _order.orderIsReady = true
            await _order.save();
            return {message: 'OK ! Order is now ready !'}
        }else{
            return {message: 'Order not found !'}
        }
    }

    async checkOrderStatus(userEmail){
        let _order = await this.orderModel.findOne({user:userEmail}).exec();
        if(_order){
            return _order.orderIsReady ? {Message: 'Order Ready For Pickup !'} : {Message: 'Order is being prepared !'}
        }else{
            return  {Message: 'Order Not Found !'}
        }
    }

}

module.exports = OrdersService;
