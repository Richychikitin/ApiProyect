/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('SaleDetails', function (table) {
    table.increments('ID').primary()
    table.integer('ID_Venta').unsigned().notNullable()
    table.foreign('ID_Venta').references('Sales.ID')
    table.integer('ID_Producto').unsigned().notNullable()
    table.foreign('ID_Producto').references('Products.ID')
    table.integer('Cantidad').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
