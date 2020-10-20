const redisOp = require('../redis');
const Order = require('../models/order');
const Product = require('../models/product');
const mongoose = require('mongoose');

exports.billing = async (req, res) => {
    redisOp.createConnection().then(client => {
        client.get("list-credit", async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const credits = await getCredit()
                    json = JSON.stringify(credits)
                    client.set("list-credit", json, function (err) {
                        client.expire('list-credit', 90);
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

const getCredit = async () => {
    const credits = await Product.find({ type: "credit" })
        .exec()

    let groupCredits = credits.reduce((res, curr) => {
        res[curr.alias] = [...res[curr.alias] || [], curr];
        return res;
    }, {});

    let dataGroup = []
    Object.values(groupCredits).map((items, index) => {
        let dataItems = []
        items.map((item, i) => {
            const dataItem = {
                _id: item._id,
                price: item.detail.price,
                status: item.status,
                created_at: item.created_at,
            }
            dataItems.push(dataItem)
        })
        dataGroup.push({
            name: items[index].name,
            alias: items[index].alias,
            type: items[index].credit,
            detail: dataItems
        })
    })

    const groupByProvider = {
        "data": dataGroup
    }

    return groupByProvider
}

exports.order = async (req, res) => {
    const { phone, product_id, transaction, provider_name, price } = req.body;
    try {
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            _product_id: new mongoose.Types.ObjectId(product_id),
            type: "credit",
            phone: phone,
            transaction: transaction,
            status: 1,
            created_at: new Date()
        });
        const resOrder = await order.save()

        const dataOrder = {
            id_payment: resOrder._id,
            transaction: resOrder.transaction,
            phone: resOrder.phone,
            status: resOrder.status,
            price: price,
            provider_name: provider_name,
            type: "Pulsa"
        }

        jsonData = JSON.stringify(dataOrder)
        const data = JSON.parse(jsonData)
        res.status(200).json(data);
    } catch {
        res.status(500).json({ meesage: "Error Api" });
    }
}