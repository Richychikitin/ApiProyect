// #1 Llamar a la biblioteca de express (importarla)
const express = require('express')
// Importar las rutas de mi vista Home
const costumeRoute = require('./routes/Costumers')
const productRoute = require('./routes/productsRoutes')
const salesRoute = require('./routes/Sales')
// #2 Crear y configurar una aplicación (instancia) de express
const app = express()
app.use(express.json()) // Decirle a express que vamos a usar JSON por defecto.
app.use(express.urlencoded({ extended: true })) // Esto sirve para que express pueda entender los datos que vienen de un formulario.

// #3 Crear o definir las rutas de mi servidor. (Endpoints)
app.use('/api/v1', costumeRoute)
app.use('/api/v1', productRoute)
app.use('/api/v1', salesRoute)

// #4 Levantar el servidor en un puerto, por ejemplo el 3000.
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000 🚀')
})

/// pedir dos tablas el sales saledetails
