// Importar el modelo que voy a usar - Customers
const ModelCustomers = require('../models/Customers')

// Create
const createCustomer = (req, res) => {
  ModelCustomers.createCustomer(req.body).then((customer) => {
    res.status(201).send(customer)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Read
const findAllCustomers = (req, res) => {
  ModelCustomers.findAllCustomers().then((customers) => {
    res.status(200).send(customers)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

const findOneCustomer = (req, res) => {
  ModelCustomers.findCustomerById(req.params.idCustomer).then((customer) => {
    res.status(200).send(customer)
  })
    .catch((error) => {
      res.status(400).send(error.message)
    })
}

// Update
const updateOneCustomer = (req, res) => {
  ModelCustomers.updateCustomer(req.params.idCustomer, req.body)
    .then(customer => res.status(200).send(customer))
    .catch(error => res.status(400).send(error.message))
}

// Delete
const destroyOneCustomer = (req, res) => {
  ModelCustomers.deleteCustomer(req.params.idCustomer)
    .then(() => res.status(204).send())
    .catch(error => res.status(400).send(error.message))
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findOneCustomer,
  updateOneCustomer,
  destroyOneCustomer
}
