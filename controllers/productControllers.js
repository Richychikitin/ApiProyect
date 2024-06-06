// Importar el modelo que voy a usar - Products
const ModelProducts = require('../models/Products')

// Create
const createProduct = (req, res) => {
  ModelProducts.createProduct(req.body).then((product) => {
    res.status(201).send(product)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read
const findAllProducts = (req, res) => {
  ModelProducts.findAllProducts().then((products) => {
    res.status(200).send(products)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

const findOneProduct = (req, res) => {
  ModelProducts.findProductById(req.params.idProduct).then((product) => {
    res.status(200).send(product)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Update
const updateOneProduct = (req, res) => {
  ModelProducts.updateProduct(req.params.idProduct, req.body)
    .then(product => res.status(200).send(product))
    .catch(error => res.status(400).send(error.message))
}

// Delete
const destroyOneProduct = (req, res) => {
  ModelProducts.deleteProduct(req.params.idProduct)
    .then(() => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateOneProduct,
  destroyOneProduct
}
