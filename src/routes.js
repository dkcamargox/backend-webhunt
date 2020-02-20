const express = require("express");
const routes = express.Router(); //é daqui que sai as rotas 
const ProductController = require("./controllers/ProductControllers");
//AQUI FICAM AS ROTAS

routes.get("/products" , ProductController.index );
routes.post("/products" , ProductController.store );
routes.get("/products/:id" , ProductController.show);
routes.put("/products/:id" , ProductController.update);
routes.delete("/products/:id" , ProductController.del);


module.exports = routes;