// backend

// ======= contorller => package =======
    // const listPackage = require('../dummy/listPackage.json')
    // const orderPackage = require('../dummy/detailPaymentPackage.json')

    // const listPackage = await package()
    // json = JSON.stringify(listPackage)
    // const data = JSON.parse(json)
    // res.status(200).json(data);

// ======= contorller => billing =======

    // ---------dummy insertmany------------
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


    //--------------update mongo data----------------
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


    // ------------update push set pull-----------------
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

    // ---------- insert mongo --------------------
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

    // -------------grouping array with reduce-----------------
    // // Accepts the array and key
    //     const groupBy = (array, key) => {
    //         // Return the end result
    //         return array.reduce((result, currentValue) => {
    //             // If an array already present for key, push it to the array. Else create an array and push the object
    //             (result[currentValue[key]] = result[currentValue[key]] || []).push(
    //                 currentValue
    //             );
    //             // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    //             return result;
    //         }, {}); // empty object is the initial value for result object
    //     };

    //     // Group by color as key to the person array
    //     const personGroupedByColor = groupBy(response, 'alias');

    // -------------grouping array with reduce-----------------
    // const people = [
    //     { name: 'Lee', age: 21 },
    //     { name: 'Ajay', age: 20 },
    //     { name: 'Jane', age: 20 }
    //  ];
    //  function groupBy(objectArray, property) {
    //     return objectArray.reduce((acc, obj) => {
    //        const key = obj[property];
    //        if (!acc[key]) {
    //           acc[key] = [];
    //        }
    //        // Add object to list for given key's value
    //        acc[key].push(obj);
    //        return acc;
    //     }, {});
    //  }
    //  const groupedPeople = groupBy(people, 'age');
    //  console.log(groupedPeople);