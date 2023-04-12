const CustomerAddress = require("../models/customers/customerAddress.model");
const OrderDetail = require("../models/orders/orderDetail.model");
const Order = require("../models/orders/orders.model");

const orderController = async (req, res) => {
    try {
        const { product_id, quantity, payment_method_id, customer_id } =
            req.body;

        if (!product_id || !quantity || payment_method_id || customer_id) {
            res.status(500).send({
                message: "payload cannot be empty",
            });
        }

        const address_id = await CustomerAddress.query().findOne({
            customer_id: customer_id,
        });

        const order = await Order.query().insert({
            date: new Date().toISOString(),
            customer_address_id: address_id.id,
        });

        await OrderDetail.query()
            .insert({
                product_id,
                order_id: order.id,
                payment_method_id,
                quantity,
            })
            .returning("product_id");

        res.status(200).send({
            message: "success order",
        });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                "Some error occurred while fetching the Categories.",
        });
    }
};

module.exports = orderController;
