const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String,
        required: [true,"Title is required"],
        minlength:[3, "Name must be at least 3 charachters"]
    },
    price: {
        type: Number,
        required:[true, "price is required"]
    },
    description: {
        type: String,
        required:[true, "description is required"]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

