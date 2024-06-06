/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Sales', function (table) {
    table.increments('ID').primary()
    table.integer('ID_Cliente').unsigned().notNullable()
    table.foreign('ID_Cliente').references('Customers.ID')
    table.timestamp('Fecha').defaultTo(knex.fn.now()).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
