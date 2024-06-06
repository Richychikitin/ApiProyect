/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('Customers').del()
  await knex('Customers').insert([
    {
      Nombre: 'Juan',
      Apellidos: 'Perez',
      Email: 'juan.perez@example.com',
      Telefono: '5551234567',
      Direccion: 'Calle Falsa 123',
      CodigoPostal: '01234',
      BarrioColonia: 'Centro',
      Ciudad: 'Monterrey'
    },
    {
      Nombre: 'Maria',
      Apellidos: 'Gonzalez',
      Email: 'maria.gonzalez@example.com',
      Telefono: '5557654321',
      Direccion: 'Avenida Siempreviva 456',
      CodigoPostal: '56789',
      BarrioColonia: 'Norte',
      Ciudad: 'Guadalajara'
    },
    {
      Nombre: 'Pedro',
      Apellidos: 'Ramirez',
      Email: 'pedro.ramirez@example.com',
      Telefono: '5559876543',
      Direccion: 'Boulevard de los Reyes 789',
      CodigoPostal: '34567',
      BarrioColonia: 'Sur',
      Ciudad: 'Cancún'
    }
  ])

  // Insertar datos en la tabla Products
  await knex('Products').insert([
    {
      Nombre: 'Manzana',
      Descripcion: 'Fruta fresca',
      Precio: 10.00,
      SKU: 'SKU001'
    },
    {
      Nombre: 'Naranja',
      Descripcion: 'Fruta cítrica',
      Precio: 12.00,
      SKU: 'SKU002'
    },
    {
      Nombre: 'Platano',
      Descripcion: 'Fruta tropical',
      Precio: 8.00,
      SKU: 'SKU003'
    }
  ])

  // Insertar datos en la tabla Sales
  await knex('Sales').insert([
    {
      ID_Cliente: 1
    },
    {
      ID_Cliente: 2
    },
    {
      ID_Cliente: 3
    }
  ])

  // Insertar datos en la tabla SaleDetails
  await knex('SaleDetails').insert([
    {
      ID_Venta: 1,
      ID_Producto: 1,
      Cantidad: 5
    },
    {
      ID_Venta: 1,
      ID_Producto: 2,
      Cantidad: 3
    },
    {
      ID_Venta: 2,
      ID_Producto: 1,
      Cantidad: 2
    },
    {
      ID_Venta: 2,
      ID_Producto: 3,
      Cantidad: 4
    },
    {
      ID_Venta: 3,
      ID_Producto: 2,
      Cantidad: 1
    },
    {
      ID_Venta: 3,
      ID_Producto: 3,
      Cantidad: 6
    }
  ])
}
