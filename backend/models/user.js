const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    password : { type:  String,required: true },
    email:{ type: String, required: true },
    username: { type: String, required: true },
    imageUrl: { type: String, required: true },
    created_at: { type: Date, required: true }
})

module.exports = mongoose.model('User',userSchema);