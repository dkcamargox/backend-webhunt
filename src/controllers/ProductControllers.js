const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req , res) {
        const { page = 1 } = req.query;
        const product = await Product.paginate({ } , {page, limit:10});

        return res.json(product);
    },
    async store (req , res) {
        const product = await Product.create({
            "title": "JavaScript2",
            "description": "Linguagem de programação que tornou tudo possivel",
            "url": "https://www.javascript.com"
        });

        return res.json(product);
    },
    async show (req , res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async update ( req , res ) {
        const product = await Product.findByIdAndUpdate(req.params.id , req.body , { 
            new: true
        });

        return(res.json(product));
    },
    async del (req , res ) {
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    }
};