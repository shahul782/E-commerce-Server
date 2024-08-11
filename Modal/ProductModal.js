const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images: [
        {
            imageUrl: String
        }
    ],
    category: String,
    seller: String,
    stock: String, 
    numOfReviews: String, 
    createdAt: { type: Date, default: Date.now } 
});
 
const productModel = mongoose.model('Product', ProductSchema);  

module.exports = productModel;
