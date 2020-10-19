// const listPackage = require('../dummy/listPackage.json')
const orderPackage = require('../dummy/detailPaymentPackage.json')
const redisOp = require('../redis')
const Product = require('../models/product')
const Order = require('../models/order');
const mongoose = require('mongoose');

exports.package = async (req, res, next) => {
    // const listPackage = await package()
    // json = JSON.stringify(listPackage)
    // const data = JSON.parse(json)
    // res.status(200).json(data);
    redisOp.createConnection().then(client => {
        client.get("list-package", async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const listPackage = await package()
                    json = JSON.stringify(listPackage)
                    client.set("list-package", json, function (err) {
                        client.expire('list-package', 90);
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

const package = async () => {
    const response = await Product.find({ type: "package" })
        .exec()

    let group = response.reduce((r, a) => {
        r[a.alias] = [...r[a.alias] || [], a];
        return r;
    }, {});

    let data = []
    Object.values(group).map((items, index) => {
        let dataItems = []
        items.map((item, i) => {
            const dataItem = {
                _id: item._id,
                name: item.detail.name_product,
                description: item.detail.description,
                price: item.detail.price,
                status: item.status,
                created_at: item.created_at,
            }
            dataItems.push(dataItem)
        })
        data.push({
            name: items[index].name,
            alias: items[index].alias,
            type: items[index].credit,
            detail: dataItems
        })
    })

    const groupByProvider = {
        "data": data
    }
    return groupByProvider
}

exports.order = async (req, res, next) => {
    const { phone, product_id, transaction, provider_name, price, product_name } = req.body;
    try {
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            _product_id: new mongoose.Types.ObjectId(product_id),
            type: "package",
            phone: phone,
            transaction: transaction,
            status: 1,
            created_at: new Date()
        });
        const resOrder = await order.save()

        const dataJson = {
            id_payment: resOrder._id,
            transaction: resOrder.transaction,
            phone: resOrder.phone,
            status: resOrder.status,
            price: price,
            provider_name: provider_name,
            product_name: product_name,
            type: "Paket"
        }

        json = JSON.stringify(dataJson)
        const data = JSON.parse(json)
        res.status(200).json(data);
    } catch {
        res.status(500).json({ meesage: "Error Api" });
    }

}