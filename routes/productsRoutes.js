// 1. Importar express y el router de express
const express = require('express')
const router = express.Router()
const productController = require('../controllers/productControllers')

// 2. Crear las rutas con el router
router.post('/products', productController.createProduct)
router.get('/products', productController.findAllProducts)
router.get('/products/:idProduct', productController.findOneProduct)
router.patch('/products/:idProduct', productController.updateOneProduct)
router.delete('/products/:idProduct', productController.destroyOneProduct)

// 3. Exportar el router
module.exports = router
