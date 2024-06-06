const knex = require('../config')

const createCustomer = (bodyCustomer) => {
  return knex
    .insert(bodyCustomer)
    .into('Customers')
    .returning(['ID', 'Nombre', 'Apellidos', 'Email', 'Telefono', 'Direccion', 'CodigoPostal', 'BarrioColonia', 'Ciudad'])
}

const findAllCustomers = () => {
  return knex
    .select('*')
    .from('Customers')
}

const findCustomerById = (customerId) => {
  return knex
    .select(['ID', 'Nombre', 'Apellidos', 'Email', 'Telefono', 'Direccion', 'CodigoPostal', 'BarrioColonia', 'Ciudad'])
    .from('Customers')
    .where('ID', customerId)
}

const updateCustomer = (customerId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('Customers')
    .where('ID', customerId)
    .returning(['ID', 'Nombre', 'Apellidos', 'Email', 'Telefono', 'Direccion', 'CodigoPostal', 'BarrioColonia', 'Ciudad'])
}

const deleteCustomer = (customerId) => {
  return knex
    .delete()
    .from('Customers')
    .where('ID', customerId)
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findCustomerById,
  updateCustomer,
  deleteCustomer
}
