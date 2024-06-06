/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Customers', function (table) {
    table.increments('ID').primary()
    table.string('Nombre', 50).notNullable()
    table.string('Apellidos', 50).notNullable()
    table.string('Email', 50).notNullable()
    table.string('Telefono', 20).notNullable()
    table.string('Direccion', 100).notNullable()
    table.string('CodigoPostal', 10).notNullable()
    table.string('BarrioColonia', 50).notNullable()
    table.string('Ciudad', 50).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
