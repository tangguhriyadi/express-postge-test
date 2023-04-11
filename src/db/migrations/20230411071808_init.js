/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('customer', function(table) {
        table.increments('id').primary();
        table.string('customer_name').notNullable()
      })
      .createTable('customer_address', function(table) {
        table.increments('id').primary();
        table.integer('customer_id').unsigned().references('id').inTable('customer');
        table.date('address');
      })
      .createTable('product', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable()
        table.decimal('price');
      })
      .createTable('payment_method', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable()
        table.boolean('is_active');
      })
      .createTable('order', function(table) {
        table.increments('id').primary();
        table.date('date');
        table.integer('customer_address_id').unsigned().references('id').inTable('customer_address');
      })
      .createTable('order_detail', function(table) {
        table.integer('product_id').unsigned().references('id').inTable('product');
        table.integer('order_id').unsigned().references('id').inTable('order');
        table.integer('payment_method_id').unsigned().references('id').inTable('payment_method');
        table.primary(['product_id', 'order_id']);
      })
      .createTable('customer_order', function(table) {
        table.integer('customer_id').unsigned().references('id').inTable('customer');
        table.integer('order_id').unsigned().references('id').inTable('order');
        table.primary(['customer_id', 'order_id']);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('customer_order')
      .dropTableIfExists('order')
      .dropTableIfExists('order_detail')
      .dropTableIfExists('payment_method')
      .dropTableIfExists('product')
      .dropTableIfExists('customer_address')
      .dropTableIfExists('customer');
  };
