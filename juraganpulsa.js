/*
 Navicat Premium Data Transfer

 Source Server         : docker-mongo-pulsa-local
 Source Server Type    : MongoDB
 Source Server Version : 40400
 Source Host           : localhost:27017
 Source Schema         : juraganpulsa

 Target Server Type    : MongoDB
 Target Server Version : 40400
 File Encoding         : 65001

 Date: 19/10/2020 17:10:26
*/


// ----------------------------
// Collection structure for orders
// ----------------------------
db.getCollection("orders").drop();
db.createCollection("orders");

// ----------------------------
// Documents of orders
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("juraganpulsa");
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8ba5a0c078d524f829b91b"),
    "_product_id": ObjectId("5f8ba2ede01afe24bc8fd42e"),
    type: "credit",
    phone: "0812121412",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:17:04.464Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8ba5a5c078d524f829b91c"),
    "_product_id": ObjectId("5f8ba2ede01afe24bc8fd42e"),
    type: "credit",
    phone: "0812121442",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:17:09.551Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8ba5ccc078d524f829b91d"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "0812121442",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:17:48.912Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8ba5cdc078d524f829b91e"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "0812121442",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:17:49.503Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bdf2f6cd0232d2d854118"),
    "_product_id": ObjectId("5f8badb46494d825d6472ff4"),
    type: "credit",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T06:22:39.844Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8be0b7f5f19e2d74ad9aed"),
    "_product_id": ObjectId("5f8badb46494d825d6472ff4"),
    type: "credit",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T06:29:11.409Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bf46c80cbe62f3d98086d"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T07:53:16.593Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bf5310fdb092f686b941c"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T07:56:33.786Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bf89067d4ba2fc588cbfa"),
    "_product_id": ObjectId("5f8badad6494d825d6472ff3"),
    type: "credit",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T08:10:56.641Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bfbbd077eef30c6956298"),
    "_product_id": ObjectId("5f8badb46494d825d6472ff4"),
    type: "credit",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T08:24:29.000Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8bfbd5077eef30c6956299"),
    "_product_id": ObjectId("5f8badad6494d825d6472ff3"),
    type: "credit",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T08:24:53.000Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c008c387cbb30e409adc9"),
    "_product_id": ObjectId("5f8badc56494d825d6472ff6"),
    type: "credit",
    phone: "+62 815-1308-8287",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T08:45:00.456Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c2ba6af389833f33adaf0"),
    "_product_id": ObjectId("5f8badb46494d825d6472ff4"),
    type: "credit",
    phone: "082128819980",
    transaction: "ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T11:48:54.967Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c2bb1af389833f33adaf1"),
    "_product_id": ObjectId("5f8badc96494d825d6472ff7"),
    type: "credit",
    phone: "082128819980",
    transaction: "bri",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T11:49:05.613Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c8c8fd4c3ff3eb10aed8d"),
    "_product_id": ObjectId("5f8badb46494d825d6472ff4"),
    type: "credit",
    phone: "082128819980",
    transaction: "ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T18:42:23.473Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c8d2ed4c3ff3eb10aed8e"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "082128819980",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T18:45:02.627Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c8d64d4c3ff3eb10aed8f"),
    "_product_id": ObjectId("5f8ba2ede01afe24bc8fd42e"),
    type: "credit",
    phone: "082128819980",
    transaction: "ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T18:45:56.318Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c8db6d4c3ff3eb10aed90"),
    "_product_id": ObjectId("5f8badc56494d825d6472ff6"),
    type: "credit",
    phone: "+62 815-1308-8287",
    transaction: "ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T18:47:18.576Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c8dc1d4c3ff3eb10aed91"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "08182123123",
    transaction: "Ovo",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T18:47:29.693Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orders").insert([ {
    _id: ObjectId("5f8c9112f4093b3f26895092"),
    "_product_id": ObjectId("5f8ba343e01afe24bc8fd42f"),
    type: "package",
    phone: "082128819980",
    transaction: "mandiri",
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T19:01:38.07Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("juraganpulsa");
db.getCollection("products").insert([ {
    _id: ObjectId("5f8ba2ede01afe24bc8fd42e"),
    name: "Telkomsel",
    alias: "telkomsel",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("20000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:05:33.061Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8ba343e01afe24bc8fd42f"),
    name: "Telkomsel",
    alias: "telkomsel",
    type: "package",
    detail: {
        "name_product": "Combo Sakti 100MB",
        description: "Paket mangkus ajaib serta sakti",
        price: NumberInt("20000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:06:59.138Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8badad6494d825d6472ff3"),
    name: "Telkomsel",
    alias: "telkomsel",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("10000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:51:25.287Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8badb46494d825d6472ff4"),
    name: "Telkomsel",
    alias: "telkomsel",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("30000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:51:32.037Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8badc16494d825d6472ff5"),
    name: "XL",
    alias: "xl",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("10000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:51:45.523Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8badc56494d825d6472ff6"),
    name: "XL",
    alias: "xl",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("20000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:51:49.817Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("5f8badc96494d825d6472ff7"),
    name: "XL",
    alias: "xl",
    type: "credit",
    detail: {
        "name_product": null,
        description: null,
        price: NumberInt("30000")
    },
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-18T02:51:53.285Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for providers
// ----------------------------
db.getCollection("providers").drop();
db.createCollection("providers");

// ----------------------------
// Documents of providers
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("juraganpulsa");
db.getCollection("providers").insert([ {
    _id: ObjectId("5f8997fd1685a231196fc0e3"),
    name: "Telkomsel",
    alias: "telkomsel",
    package: [
        {
            _id: ObjectId("5f8997fd1685a231196fc0e4"),
            name: "Combo Sakti 100MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0e5"),
            name: "Combo Sakti 200MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("20000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0e6"),
            name: "Combo Sakti 300MB Telkomsel Bulk",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("30000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0e7"),
            name: "Combo Sakti 400MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("40000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0e8"),
            name: "Combo Sakti 500MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0e9"),
            name: "Combo Sakti 600MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("60000")
        }
    ],
    credit: [
        {
            _id: ObjectId("5f8997fd1685a231196fc0ea"),
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0eb"),
            price: NumberInt("25000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0ec"),
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0ed"),
            price: NumberInt("100000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0ee"),
            price: NumberInt("1500000")
        },
        {
            _id: ObjectId("5f8997fd1685a231196fc0ef"),
            price: NumberInt("200000")
        }
    ],
    __v: NumberInt("0"),
    "created_at": ISODate("2020-10-16T18:24:32.387Z"),
    status: NumberInt("1")
} ]);
db.getCollection("providers").insert([ {
    _id: ObjectId("5f89dcd91685a231196fc0fe"),
    name: "XL",
    alias: "xl",
    package: [
        {
            _id: ObjectId("5f89dcd91685a231196fc0ff"),
            name: "Combo Sakti 100MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc100"),
            name: "Combo Sakti 200MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("20000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc101"),
            name: "Combo Sakti 300MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("30000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc102"),
            name: "Combo Sakti 400MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("40000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc103"),
            name: "Combo Sakti 500MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc104"),
            name: "Combo Sakti 600MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("60000")
        }
    ],
    credit: [
        {
            _id: ObjectId("5f89dcd91685a231196fc105"),
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc106"),
            price: NumberInt("25000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc107"),
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc108"),
            price: NumberInt("100000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc109"),
            price: NumberInt("150000")
        },
        {
            _id: ObjectId("5f89dcd91685a231196fc10a"),
            price: NumberInt("200000")
        }
    ],
    __v: NumberInt("0"),
    "created_at": ISODate("2020-10-16T18:24:32.387Z"),
    status: NumberInt("1")
} ]);
db.getCollection("providers").insert([ {
    _id: ObjectId("5f89dd2c1685a231196fc10b"),
    name: "Smartfren",
    alias: "smartfren",
    package: [
        {
            _id: ObjectId("5f89dd2c1685a231196fc10c"),
            name: "Combo Sakti 100MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc10d"),
            name: "Combo Sakti 200MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("20000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc10e"),
            name: "Combo Sakti 300MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("30000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc10f"),
            name: "Combo Sakti 400MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("40000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc110"),
            name: "Combo Sakti 500MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc111"),
            name: "Combo Sakti 600MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("60000")
        }
    ],
    credit: [
        {
            _id: ObjectId("5f89dd2c1685a231196fc112"),
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc113"),
            price: NumberInt("25000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc114"),
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc115"),
            price: NumberInt("100000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc116"),
            price: NumberInt("150000")
        },
        {
            _id: ObjectId("5f89dd2c1685a231196fc117"),
            price: NumberInt("200000")
        }
    ],
    __v: NumberInt("0"),
    "created_at": ISODate("2020-10-16T18:24:32.387Z"),
    status: NumberInt("1")
} ]);
db.getCollection("providers").insert([ {
    _id: ObjectId("5f89e5605d6ede112bdbc04f"),
    name: "Indosat",
    alias: "indosat",
    package: [
        {
            _id: ObjectId("5f89e5605d6ede112bdbc043"),
            name: "Combo Sakti 100MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc044"),
            name: "Combo Sakti 200MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("20000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc045"),
            name: "Combo Sakti 300MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("30000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc046"),
            name: "Combo Sakti 400MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("40000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc047"),
            name: "Combo Sakti 500MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc048"),
            name: "Combo Sakti 600MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("60000")
        }
    ],
    credit: [
        {
            _id: ObjectId("5f89e5605d6ede112bdbc049"),
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc04a"),
            price: NumberInt("25000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc04b"),
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc04c"),
            price: NumberInt("100000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc04d"),
            price: NumberInt("150000")
        },
        {
            _id: ObjectId("5f89e5605d6ede112bdbc04e"),
            price: NumberInt("200000")
        }
    ],
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-16T18:24:32.387Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("providers").insert([ {
    _id: ObjectId("5f8a6bf524968f12bb5be9c6"),
    name: "Tri",
    alias: "tri",
    package: [
        {
            _id: ObjectId("5f8a82c858ea2a160f69db67"),
            name: "Combo Sakti 100MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f8a83e953ac29163cce9041"),
            name: "Combo Sakti 600MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("60000")
        },
        {
            _id: ObjectId("5f8a84f4988d87167580579f"),
            name: "Combo Sakti 200MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("20000")
        },
        {
            _id: ObjectId("5f8a84f9988d8716758057a0"),
            name: "Combo Sakti 300MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("30000")
        },
        {
            _id: ObjectId("5f8a84ff988d8716758057a1"),
            name: "Combo Sakti 400MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("40000")
        },
        {
            _id: ObjectId("5f8a8508988d8716758057a2"),
            name: "Combo Sakti 500MB",
            description: "Paket mangkus ajaib serta sakti",
            price: NumberInt("50000")
        }
    ],
    credit: [
        {
            _id: ObjectId("5f8a6bf524968f12bb5be9c1"),
            price: NumberInt("10000")
        },
        {
            _id: ObjectId("5f8a6bf524968f12bb5be9c2"),
            price: NumberInt("25000")
        },
        {
            _id: ObjectId("5f8a6bf524968f12bb5be9c3"),
            price: NumberInt("50000")
        },
        {
            _id: ObjectId("5f8a6bf524968f12bb5be9c4"),
            price: NumberInt("100000")
        },
        {
            _id: ObjectId("5f8a6bf524968f12bb5be9c5"),
            price: NumberInt("150000")
        },
        {
            _id: ObjectId("5f8a860c660cd81695b07aa3"),
            price: NumberInt("20000")
        }
    ],
    status: NumberInt("1"),
    "created_at": ISODate("2020-10-17T03:58:45.587Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
