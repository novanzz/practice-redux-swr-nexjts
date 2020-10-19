const redisOp = require('../redis');
// const listBilling = require('../dummy/listBilling.json')
const Order = require('../models/order');
const Product = require('../models/product');
const mongoose = require('mongoose');

exports.billing = async (req, res, next) => {
    redisOp.createConnection().then(client => {
        client.get("list-billing", async (err, reply) => {
            if (reply !== null) {
                const data = JSON.parse(reply)
                res.status(200).json(data);
            } else {
                try {
                    const listBilling = await billings()
                    json = JSON.stringify(listBilling)
                    client.set("list-billing", json, function (err) {
                        client.expire('list-billing', 90);
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

const billings = async () => {
    const response = await Product.find({ type: "credit" })
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

        const dataJson = {
            id_payment: resOrder._id,
            transaction: resOrder.transaction,
            phone: resOrder.phone,
            status: resOrder.status,
            price: price,
            provider_name: provider_name,
            type: "Pulsa"
        }

        json = JSON.stringify(dataJson)
        const data = JSON.parse(json)
        res.status(200).json(data);
    } catch {
        res.status(500).json({ meesage: "Error Api" });
    }
}


// dummy insertmany
// const package = req.body.package.map((item)=> ({
//     _id: new mongoose.Types.ObjectId(),
//     name: item.name,
//     description: item.description,
//     price: item.price
// }))
// const credit = req.body.credit.map((item)=> ({
//     _id: new mongoose.Types.ObjectId(),
//     price: item.price
// }))

// const provider = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     alias: req.body.alias,
//     package: package,
//     credit: credit,
//     status: 1,
//     created_at: new Date()
// });
// const resProvider = await provider.save()

// ==============================================================


//update
// const package = {
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price
// }
// const updatePackage = await Provider.provider.findByIdAndUpdate(
//     {
//         _id: new mongoose.Types.ObjectId("5f8a6bf524968f12bb5be9c6")
//     },
//     {
//         package: [ package ]
//     }
// )
// console.log(updatePackage);


// ===============================================================


// const package = {
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price
// }
// update $push $set $pull
// const updatePackage = await Provider.provider.findByIdAndUpdate(
//     {
//         _id: new mongoose.Types.ObjectId("5f8a6bf524968f12bb5be9c6")
//     },
//     { $push: { package:  package  } }
// )


// console.log(updatePackage);

// ==============================================================

//insert product
// const provider = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     alias: req.body.alias,
//     type: req.body.type,
//     detail: {
//         name_product: req.body.name_product !== undefined ? req.body.name_product : null,
//         description: req.body.description !== undefined ? req.body.description : null,
//         price: req.body.price
//     },
//     status: 1,
//     created_at: new Date()
// });
// const resProvider = await provider.save()


// ==============================================================

   // // Accepts the array and key
    // const groupBy = (array, key) => {
    //     // Return the end result
    //     return array.reduce((result, currentValue) => {
    //         // If an array already present for key, push it to the array. Else create an array and push the object
    //         (result[currentValue[key]] = result[currentValue[key]] || []).push(
    //             currentValue
    //         );
    //         // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    //         return result;
    //     }, {}); // empty object is the initial value for result object
    // };

    // Group by color as key to the person array
    // const personGroupedByColor = groupBy(response, 'alias');