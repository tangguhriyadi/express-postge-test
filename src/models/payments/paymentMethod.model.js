class PaymentMethod extends Model {
    static get tableName() {
      return 'payment_method';
    }

    static get idColumn(){
        return 'id'
    }

    static get jsonSchema(){
        return {
            type: "object",
            required: [],
            properties: {
                id: { type: "integer" },
                name: { type: "string" },
                is_active: { type: "boolean" },
            },
        };
    }
  
    static get relationMappings() {
      const OrderDetail = require('../orders/orderDetail.model');
  
      return {
        orderDetails: {
          relation: Model.HasManyRelation,
          modelClass: OrderDetail,
          join: {
            from: 'payment_method.id',
            to: 'order_detail.payment_method_id',
          },
        },
      };
    }
  }

  module.exports = PaymentMethod