const express = require("express");
const mongoose = require("mongoose");
const reqDir = require("require-dir");
const cors = require("cors");
//app
const app = express();  //ESSE CARA QUE FAZ A MAGICA ELE FAZ NÓS PODERMOS USAR O REQ E RES
app.use(express.json());       //ISSO AQUI É PRA APLICAÇÃO ENTENDER O FORMATO JSON
//TREQUINHO DA SEGURANÇA NÃO SEI DIREITO MAS TEM QUE TER
app.use(cors());
// db
//CONECTANDO NO BANCO LOCAL
mongoose.connect("mongodb+srv://dkcamargox:camargo1508@cluster0-zmptz.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
reqDir("./src/models");


//DEFININDO QUE A APLICAÇÃO VAI USAR AS ROTAS DO ARQUIVO ROUTES
app.use("/api" , require("./src/routes"));

app.listen(3001);

