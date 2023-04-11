const { Model } = require("objection");

class CustomerAddress extends Model {
    static get tableName() {
        return "customer_address";
    }

    static get idColumn() {
        return 'id'
    }

    static get jsonSchema(){
        return {
            type: "object",
            required: [],
            properties: {
                id: { type: "integer" },
                customer_id: { type: "integer" },
                address: { type: "integer" },
            },
        };
    }

    static get relationMappings() {
        const Customer = require("./customers.model");

        return {
            customer: {
                relation: Model.BelongsToOneRelation,
                modelClass: Customer,
                join: {
                    from: "customer_address.customer_id",
                    to: "customer.id",
                },
            },
        };
    }
}

module.exports = CustomerAddress;
