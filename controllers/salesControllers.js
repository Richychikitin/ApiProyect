const ModelSales = require('../models/Sales')

// Sales

// Create Sale
const createSale = (req, res) => {
  ModelSales.createSale(req.body).then((sale) => {
    res.status(201).send(sale)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read All Sales with SaleDetails
const findAllSales = (req, res) => {
  ModelSales.findAllSales().then((sales) => {
    res.status(200).send(sales)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read One Sale with SaleDetails
const findOneSale = (req, res) => {
  ModelSales.findSaleById(req.params.idSale).then((sale) => {
    res.status(200).send(sale)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Update Sale
const updateOneSale = (req, res) => {
  ModelSales.updateSale(req.params.idSale, req.body)
    .then(sale => res.status(200).send(sale))
    .catch(error => res.status(400).send(error.message))
}

// Delete Sale
const destroyOneSale = (req, res) => {
  ModelSales.deleteSale(req.params.idSale)
    .then(() => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

// SaleDetails

// Create SaleDetail
const createSaleDetail = (req, res) => {
  ModelSales.createSaleDetail(req.body).then((saleDetail) => {
    res.status(201).send(saleDetail)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read All SaleDetails
const findAllSaleDetails = (req, res) => {
  ModelSales.findAllSaleDetails().then((saleDetails) => {
    res.status(200).send(saleDetails)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read One SaleDetail
const findOneSaleDetail = (req, res) => {
  ModelSales.findSaleDetailById(req.params.idSaleDetail).then((saleDetail) => {
    res.status(200).send(saleDetail)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Update SaleDetail
const updateOneSaleDetail = (req, res) => {
  ModelSales.updateSaleDetail(req.params.idSaleDetail, req.body)
    .then(saleDetail => res.status(200).send(saleDetail))
    .catch(error => res.status(400).send(error.message))
}

// Delete SaleDetail
const destroyOneSaleDetail = (req, res) => {
  ModelSales.deleteSaleDetail(req.params.idSaleDetail)
    .then(() => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

module.exports = {
  // Sales
  createSale,
  findAllSales,
  findOneSale,
  updateOneSale,
  destroyOneSale,
  // SaleDetails
  createSaleDetail,
  findAllSaleDetails,
  findOneSaleDetail,
  updateOneSaleDetail,
  destroyOneSaleDetail
}
