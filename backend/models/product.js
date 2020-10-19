const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    alias: { type: String, required: true },
    type: { type: String, required: true },
    detail: {
        name_product: { type: String },
        description: { type: String},
        price: { type: Number, required: true }
    },
    status: { type: Number, required: true },
    created_at: { type: Date, required: true }
});

// model class dengan nama product
module.exports = mongoose.model('Product', productSchema)
