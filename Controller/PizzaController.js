const express = require('express');
const router = express.Router();

// Array de pizzas
const pizzas = [
    { id: 1, name: 'Pizza Margarita', ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 2, name: 'Pizza Pepperoni', ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 3, name: 'Pizza Hawaiana', ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 4, name: 'Pizza BBQ Pollo', ingredients: ['BBQ sauce', 'mozzarella', 'grilled chicken', 'red onion', 'cilantro'] },
    { id: 6, name: 'Pizza de Jamón y Queso', ingredients: ['tomato', 'mozzarella', 'ham'] },
    { id: 7, name: 'Pizza de Pollo y Champiñones', ingredients: ['tomato', 'mozzarella', 'grilled chicken', 'mushrooms'] },
];

// Obtener todas las pizzas
const getPizzas = async (req, res) => {
  try {
    // Devuelve el array de pizzas como respuesta
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching pizzas' });
  }
};

// Obtiene una pizza por su ID
const getPizzaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pizza = pizzas.find(pizza => pizza.id === parseInt(id));
    if (!pizza) {
      return res.status(404).json({ error: 'Pizza not found' });
    }
    res.status(200).json(pizza);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching pizza by ID' });
  }
};

// Edita una pizza por su ID
const editPizza = async (req, res) => {
  const { id } = req.params;
  const updatedPizza = req.body;
  try {
    const index = pizzas.findIndex(pizza => pizza.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ error: 'Pizza not found' });
    }
    pizzas[index] = { ...pizzas[index], ...updatedPizza };
    res.status(200).json({ message: 'Pizza updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating pizza' });
  }
};

// Crea una nueva pizza
const createPizza = async (req, res) => {
  const { name, ingredients } = req.body;
  try {
    const id = pizzas.length + 1; // Asigna un nuevo ID basado en el tamaño actual del array
    const newPizza = { id, name, ingredients };
    pizzas.push(newPizza); // Agrega la nueva pizza al array
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(500).json({ error: 'Error creating pizza' });
  }
}

// Elimina una pizza por su ID
const deletePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const index = pizzas.findIndex(pizza => pizza.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ error: 'Pizza not found' });
    }
    pizzas.splice(index, 1); // Elimina la pizza del array
    res.status(200).json({ message: 'Pizza deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting pizza' });
  }
};

module.exports = {
    getPizzas,
    getPizzaById,
    createPizza,
    editPizza,
    deletePizza
};
