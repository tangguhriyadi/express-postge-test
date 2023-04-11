const { Model } = require("objection");

class Customer extends Model {
    static get tableName() {
        return "customer";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                id: { type: "integer" },
                customer_name: { type: "string" },
            },
        };
    }

    static get relationMappings() {
        const CustomerAddress = require("./customerAddress.model");
        const Order = require("../orders/orders.model");

        return {
            addresses: {
                relation: Model.HasManyRelation,
                modelClass: CustomerAddress,
                join: {
                    from: "customer.id",
                    to: "customer_address.customer_id",
                },
            },
            orders: {
                relation: Model.ManyToManyRelation,
                modelClass: Order,
                join: {
                    from: "customer.id",
                    through: {
                        from: "customer_order.customer_id",
                        to: "customer_order.order_id",
                    },
                    to: "order.id",
                },
            },
        };
    }
}

module.exports = Customer;
