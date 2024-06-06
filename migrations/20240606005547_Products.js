/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Products', function (table) {
    table.increments('ID').primary()
    table.string('Nombre', 50).notNullable()
    table.text('Descripcion').notNullable()
    table.decimal('Precio', 10, 2).notNullable()
    table.string('SKU', 30).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
