const knex = require('../config')

const createProduct = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('Products')
    .returning(['ID', 'Nombre', 'Descripcion', 'Precio', 'SKU'])
}

const findAllProducts = () => {
  return knex
    .select('*')
    .from('Products')
}

const findProductById = (productId) => {
  return knex
    .select(['ID', 'Nombre', 'Descripcion', 'Precio', 'SKU'])
    .from('Products')
    .where('ID', productId)
}

const updateProduct = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('Products')
    .where('ID', productId)
    .returning(['ID', 'Nombre', 'Descripcion', 'Precio', 'SKU'])
}

const deleteProduct = (productId) => {
  return knex
    .delete()
    .from('Products')
    .where('ID', productId)
}

module.exports = {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct
}
