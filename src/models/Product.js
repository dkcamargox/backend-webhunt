const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
//ESQUEMA DO QUE VAI PRO DB
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        deafault: Date.now
    }


});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product" , ProductSchema );