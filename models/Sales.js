const knex = require('../config')

// Create Sale
const createSale = (sale) => {
  return knex('sales')
    .insert(sale)
    .returning('*')
}

// Read All Sales with SaleDetails
const findAllSales = () => {
  return knex('sales')
    .join('sale_details', 'sales.sale_id', '=', 'sale_details.sale_id')
    .join('products', 'sale_details.product_id', '=', 'products.product_id')
    .select(
      'sales.sale_id',
      'sales.customer_id',
      'sales.sale_date',
      'sale_details.sale_detail_id',
      'sale_details.product_id',
      'sale_details.quantity',
      'products.name as product_name',
      'products.price as product_price'
    )
}

// Read One Sale with SaleDetails
const findSaleById = (saleId) => {
  return knex('sales')
    .join('sale_details', 'sales.sale_id', '=', 'sale_details.sale_id')
    .join('products', 'sale_details.product_id', '=', 'products.product_id')
    .select(
      'sales.sale_id',
      'sales.customer_id',
      'sales.sale_date',
      'sale_details.sale_detail_id',
      'sale_details.product_id',
      'sale_details.quantity',
      'products.name as product_name',
      'products.price as product_price'
    )
    .where('sales.sale_id', saleId)
}

// Update Sale
const updateSale = (saleId, sale) => {
  return knex('sales')
    .update(sale)
    .where('sale_id', saleId)
    .returning('*')
}

// Delete Sale
const deleteSale = (saleId) => {
  return knex('sales')
    .where('sale_id', saleId)
    .del()
}

// Create SaleDetail
const createSaleDetail = (saleDetail) => {
  return knex('sale_details')
    .insert(saleDetail)
    .returning('*')
}

// Read All SaleDetails
const findAllSaleDetails = () => {
  return knex('sale_details')
    .join('products', 'sale_details.product_id', '=', 'products.product_id')
    .select(
      'sale_details.sale_detail_id',
      'sale_details.sale_id',
      'sale_details.product_id',
      'sale_details.quantity',
      'products.name as product_name',
      'products.price as product_price'
    )
}

// Read One SaleDetail
const findSaleDetailById = (saleDetailId) => {
  return knex('sale_details')
    .join('products', 'sale_details.product_id', '=', 'products.product_id')
    .select(
      'sale_details.sale_detail_id',
      'sale_details.sale_id',
      'sale_details.product_id',
      'sale_details.quantity',
      'products.name as product_name',
      'products.price as product_price'
    )
    .where('sale_details.sale_detail_id', saleDetailId)
}

// Update SaleDetail
const updateSaleDetail = (saleDetailId, saleDetail) => {
  return knex('sale_details')
    .update(saleDetail)
    .where('sale_detail_id', saleDetailId)
    .returning('*')
}

// Delete SaleDetail
const deleteSaleDetail = (saleDetailId) => {
  return knex('sale_details')
    .where('sale_detail_id', saleDetailId)
    .del()
}

module.exports = {
  createSale,
  findAllSales,
  findSaleById,
  updateSale,
  deleteSale,
  createSaleDetail,
  findAllSaleDetails,
  findSaleDetailById,
  updateSaleDetail,
  deleteSaleDetail
}
