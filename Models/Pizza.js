// models/Pizza.js

// Simulación de una base de datos o un archivo JSON
const pizzas = [
    { id: 1, name: 'Pizza Margarita', ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 2, name: 'Pizza Pepperoni', ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 3, name: 'Pizza Hawaiana', ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 4, name: 'Pizza BBQ Pollo', ingredients: ['BBQ sauce', 'mozzarella', 'grilled chicken', 'red onion', 'cilantro'] },
    { id: 6, name: 'Pizza de Jamón y Queso', ingredients: ['tomato', 'mozzarella', 'ham'] },
    { id: 7, name: 'Pizza de Pollo y Champiñones', ingredients: ['tomato', 'mozzarella', 'grilled chicken', 'mushrooms'] },
];
  
  const Pizza = {
    // Obtener todas las pizzas
    getAll: () => pizzas,
  
    // Obtener una pizza por su ID
    getById: (id) => pizzas.find(pizza => pizza.id === id),
  
    // Actualizar una pizza por su ID
    updatePizza: (id, updatedPizza) => {
      const index = pizzas.findIndex(pizza => pizza.id === id);
      if (index !== -1) {
        pizzas[index] = { id, ...updatedPizza };
        return true;
      }
      return false;
    },

    createPizza:(req, res) => {
        const { name, ingredients } = req.body;
        
        // Verificar si se proporcionan los datos necesarios
        if (!name || !ingredients) {
          return res.status(400).json({ error: 'Missing name or ingredients' });
        }
      
        // Crear una nueva pizza
        const newPizza = {
          id: pizzas.length + 1, // Generar un nuevo ID
          name,
          ingredients
        };
      
        // Agregar la nueva pizza a la lista
        pizzas.push(newPizza);
      
        // Enviar una respuesta de éxito
        res.status(201).json(newPizza);
      }
  
    // Agregar más métodos según sea necesario, como crear una nueva pizza, eliminar una pizza, etc.
  };
  
  module.exports = Pizza;
  