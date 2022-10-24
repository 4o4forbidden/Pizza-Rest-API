class PizzasService {

    constructor({ Pizza }) {
        this.pizzaModel = Pizza;
    }

    async creatPizza(data) {
        // Check if pizza exists
        let _pizza = await this.pizzaModel.findOne({
            pizzaType: data.pizzaType
        });

        if (_pizza) {
            return {
                message: 'Failed! Pizza already exists!'
            };
        } else {
            _pizza = new this.pizzaModel(data);
            await _pizza.save();

            return {
                message: `Pizza ${data.pizzaType} created successfully!`
            };
        }
    }

    async listPizzas(paginationData) {
        let pizzasList = [];
        let limit = paginationData.limit || 10;
        let page = paginationData.page || 0;

        let searchQuery = {};

        if (paginationData.type) {
            searchQuery = {
                pizzaType: paginationData.type
            };
        }

        let _pizzas = await this.pizzaModel.find(searchQuery)
            .limit(limit)
            .skip(limit * page);

        for (let i = 0; i < _pizzas.length; i++) {
            pizzasList.push(_pizzas[i]);
        }

        return {
            count: _pizzas.length,
            pizzas: pizzasList
        };
    }

    async updatePizzas (pizzaType, data) {
        // Check if pizza exists
        let _pizza = await this.pizzaModel.findOne({pizzaType: pizzaType}).exec();

        if (_pizza) {
            _pizza.pizzaType = data.pizzaType ? data.pizzaType : _pizza.pizzaType;
            _pizza.pizzaPrice = data.pizzaPrice ? data.pizzaPrice : _pizza.pizzaPrice;

            _pizza = await _pizza.save();

            return {
                message: 'Pizza Updated Successfully!',
                pizza: _pizza
            };
        } else {
            return {
                message: 'Failed! Pizza Not Found!'
            };
        }
    }

    async deletePizza(pizzaType) {
        await this.pizzaModel.findOneAndRemove({pizzaType: pizzaType});
        
        return {
            message: `Pizza ${pizzaType} deleted Successfully!`
        };
    }
}

module.exports = PizzasService;
