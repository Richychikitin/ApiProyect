// 1. Importar express y el router de express
const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesControllers')

// 2. Crear las rutas con el router

// Sales
router.post('/sales', salesController.createSale)
router.get('/sales', salesController.findAllSales)
router.get('/sales/:idSale', salesController.findOneSale)
router.patch('/sales/:idSale', salesController.updateOneSale)
router.delete('/sales/:idSale', salesController.destroyOneSale)

// SaleDetails
router.post('/sale-details', salesController.createSaleDetail)
router.get('/sale-details', salesController.findAllSaleDetails)
router.get('/sale-details/:idSaleDetail', salesController.findOneSaleDetail)
router.patch('/sale-details/:idSaleDetail', salesController.updateOneSaleDetail)
router.delete('/sale-details/:idSaleDetail', salesController.destroyOneSaleDetail)

// 3. Exportar el router
module.exports = router
