const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductControllers");


routes.get("/products" , ProductController.index );
routes.post("/products" , ProductController.store );
routes.get("/products/:id" , ProductController.show);
routes.put("/products/:id" , ProductController.update);
routes.delete("/products/:id" , ProductController.del);


module.exports = routes;