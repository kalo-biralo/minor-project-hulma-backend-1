const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true
    },
    quotaFilled: {
        type: Number,
        required: true
    },
    quotaRequirement: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema)

