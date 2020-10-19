const redisOp = require('../redis')
const Order = require('../models/order');

exports.order = async (req, res, next) => {
    redisOp.createConnection().then(client => {
        client.get("list-order", async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                const orders = await Order
                    .find()
                    .sort({ created_at: 'desc' })
                    .populate("_product_id")
                    .limit(15)
                    .exec()
                const dataJs = {
                    "data": orders
                }
                json = JSON.stringify(dataJs)
                client.set("list-order", json, function (err) {
                    client.expire('list-order', 90);
                });
                const data = JSON.parse(json)
                res.status(200).json(data);
            } catch {
                res.status(500).json({ meesage: "Error Api" });
            }
            }
        });
    })
}

exports.detailOrder = async (req, res, next) => {
    redisOp.createConnection().then(client => {
        client.get("detail-order-" + req.body.order_id, async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const detailOrder = await Order
                        .findById(req.body.order_id)
                        .populate("_product_id")
                        .exec()

                    const dataJs = {
                        "data": {
                            id_payment: detailOrder._id,
                            transaction: detailOrder.transaction,
                            phone: detailOrder.phone,
                            status: detailOrder.status,
                            price: detailOrder._product_id.detail.price,
                            provider_name: detailOrder._product_id.name,
                            type: detailOrder._product_id.type
                        }
                    }
                    json = JSON.stringify(dataJs)
                    client.set("detail-order-" + req.body.order_id, json, function (err) {
                        client.expire('list-order', 30);
                    });
                    const data = JSON.parse(json)
                    res.status(200).json(data);
                } catch {
                    res.status(500).json({ meesage: "Error Api" });
                }


            }
        });
    })
}