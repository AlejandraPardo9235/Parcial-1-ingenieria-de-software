const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Wiew/swagger.json'); // Corregido
const routes = require('./Routes/index');

const app = express();

app.use(bodyParser.json());

// Rutas
app.use('/', routes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Corregido

// Especifica el puerto en el que deseas que se ejecute tu aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
