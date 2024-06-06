// 1. Importar express y el router de express
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerControllers')

// 2. Crear las rutas con el router
router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.findAllCustomers)
router.get('/customers/:idCustomer', customerController.findOneCustomer)
router.patch('/customers/:idCustomer', customerController.updateOneCustomer)
router.delete('/customers/:idCustomer', customerController.destroyOneCustomer)

// 3. Exportar el router
module.exports = router
