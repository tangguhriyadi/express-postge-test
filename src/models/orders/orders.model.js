class Order extends Model {
    static get tableName() {
        return "order";
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
                date: { type: "string" },
                customer_address_id: { type: "integer" },
            },
        };
    }

    static get relationMappings() {
        const CustomerAddress = require("../customers/customerAddress.model");
        const OrderDetail = require("./orderDetail.model");
        const Customer = require("../customers/customers.model");

        return {
            customerAddress: {
                relation: Model.BelongsToOneRelation,
                modelClass: CustomerAddress,
                join: {
                    from: "order.customer_address_id",
                    to: "customer_address.id",
                },
            },
            orderDetails: {
                relation: Model.HasManyRelation,
                modelClass: OrderDetail,
                join: {
                    from: "order.id",
                    to: "order_detail.order_id",
                },
            },
            customers: {
                relation: Model.ManyToManyRelation,
                modelClass: Customer,
                join: {
                    from: "order.id",
                    through: {
                        from: "customer_order.order_id",
                        to: "customer_order.customer_id",
                    },
                    to: "customer.id",
                },
            },
        };
    }
}

module.exports = Order
