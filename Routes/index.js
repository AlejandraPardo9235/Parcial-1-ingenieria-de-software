const express = require('express');
const router = express.Router();
const pizzaController = require('../Controller/PizzaController'); // Corregido

// Define las rutas manualmente
router.get('/pizzas', pizzaController.getPizzas);
router.get('/pizzas/:id', pizzaController.getPizzaById);
router.post('/pizzas', pizzaController.createPizza);
router.put('/pizzas/:id', pizzaController.editPizza);
router.delete('/pizzas/:id', pizzaController.deletePizza);

module.exports = router;
