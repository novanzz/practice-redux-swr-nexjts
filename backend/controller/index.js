const redisOp = require('../redis')
const Order = require('../models/order');
var crypto = require('crypto');

exports.order = async (req, res) => {
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
                    const dataOrder = {
                        "data": orders
                    }
                    json = JSON.stringify(dataOrder)
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

exports.detailOrder = async (req, res) => {
    redisOp.createConnection().then(client => {
        client.get("detail-order-" + req.body.order_id, async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const order = await Order
                        .findById(req.body.order_id)
                        .populate("_product_id")
                        .exec()

                    const dataOrder = {
                        "data": {
                            id_payment: order._id,
                            transaction: order.transaction,
                            phone: order.phone,
                            status: order.status,
                            price: order._product_id.detail.price,
                            provider_name: order._product_id.name,
                            type: order._product_id.type
                        }
                    }
                    json = JSON.stringify(dataOrder)
                    client.set("detail-order-" + req.body.order_id, json, function (err) {
                        client.expire("detail-order-" + req.body.order_id, 30);
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

exports.searchOrder = async (req, res) => {
    redisOp.createConnection().then(client => {
        client.get("search-order-" + req.body.phone, async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const order = await Order
                        .find({ phone: req.body.phone })
                        .populate("_product_id")
                        .exec()
                    order ? order : order = [];
                    const dataOrder = {
                        "data": order
                    }
                    json = JSON.stringify(dataOrder)
                    client.set("search-order-" + req.body.phone, json, function (err) {
                        client.expire("search-order-" + req.body.phone, 90);
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

exports.test = (req, res) => {
    const key = {
        key :crypto.createHash('md5').update(req.body.username+req.body.apikey+req.body.mode).digest("hex")
    }
    jsonData = JSON.stringify(key)
    const data = JSON.parse(jsonData)
    res.status(200).json(data);
}