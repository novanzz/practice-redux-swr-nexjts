const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _product_id : { type:  Schema.Types.ObjectId, ref:"Product" ,required: true },
    type:{ type: String, required: true },
    phone: { type: String, required: true },
    transaction: { type: String, required: true },
    status: { type: Number, required: true },
    created_at: { type: Date, required: true }
});

// model class dengan nama product
module.exports = mongoose.model('Order', orderSchema);