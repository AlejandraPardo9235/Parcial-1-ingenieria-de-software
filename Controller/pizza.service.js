// Importa el modelo de Pizza
const Pizza = require('../Models/Pizza');

// Obtiene todas las pizzas
const getPizzas = async () => {
    const pizzas = await Pizza.find({});
    return pizzas;
};

// Obtiene una pizza por su ID
const getPizzaById = async (id) => {
    const pizza = await Pizza.findById(id);
    return pizza;
};

// Crea una nueva pizza
const createPizza = async (pizzaData) => {
    const newPizza = await Pizza.create(pizzaData);
    return newPizza;
};

// Actualiza una pizza por su ID
const updatePizza = async (id, updatedPizzaData) => {
    const updatedPizza = await Pizza.findByIdAndUpdate(id, updatedPizzaData, { new: true });
    return updatedPizza;
};

// Elimina una pizza por su ID
const deletePizza = async (id) => {
    const result = await Pizza.findByIdAndDelete(id);
    return result;
};

module.exports = {
    getPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
};
