const { Model } = require("objection");

class Product extends Model {
    static get tableName() {
        return "product";
    }

    static get relationMappings() {
        const OrderDetail = require("./OrderDetail");

        return {
            orderDetails: {
                relation: Model.HasManyRelation,
                modelClass: OrderDetail,
                join: {
                    from: "product.id",
                    to: "order_detail.product_id",
                },
            },
        };
    }
}

module.exports = Product;
