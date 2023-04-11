/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "customer" CASCADE')
  await knex.raw('TRUNCATE TABLE "payment_method" CASCADE')
  await knex.raw('TRUNCATE TABLE "order" CASCADE')
  await knex.raw('TRUNCATE TABLE "product" CASCADE')

  await knex('customer').insert([
    {
      id:1,
      customer_name:'tangguh'
    },
    {
      id:2,
      customer_name:'riyadi'
    }
  ])
  await knex('payment_method').insert([
    {
      id:1,
      name:'cash',
      is_active:true
    },
    {
      id:2,
      name:'debit',
      is_active:true
    }
  ])
  await knex('product').insert([
    {
      id:1,
      name:'sabun',
    },
    {
      id:2,
      name:'sikat_gigi',
    }
  ])
};
