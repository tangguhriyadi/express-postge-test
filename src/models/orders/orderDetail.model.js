class OrderDetail extends Model {
    static get tableName() {
      return 'order_detail';
    }

    static get jsonSchema(){
        return {
            type: "object",
            required: [],
            properties: {
                product_id: { type: "integer" },
                order_id: { type: "integer" },
                payment_method_id: { type: "integer" },
            },
        };
    }
  
    static get relationMappings() {
      const Product = require('../products/products.model');
      const Order = require('./orders.model');
      const PaymentMethod = require('../payments/paymentMethod.model');
  
      return {
        product: {
          relation: Model.BelongsToOneRelation,
          modelClass: Product,
          join: {
            from: 'order_detail.product_id',
            to: 'product.id',
          },
        },
        order: {
          relation: Model.BelongsToOneRelation,
          modelClass: Order,
          join: {
            from: 'order_detail.order_id',
            to: 'order.id',
          },
        },
        paymentMethod: {
          relation: Model.BelongsToOneRelation,
          modelClass: PaymentMethod,
          join: {
            from: 'order_detail.payment_method_id',
            to: 'payment_method.id',
          },
        },
      };
    }
  }

  module.exports = OrderDetail