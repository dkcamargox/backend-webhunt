const express = require("express");
const mongoose = require("mongoose");
const reqDir = require("require-dir");
const process = require("process");
const cors = require("cors");
//app
const app = express();
app.use(express.json());
app.use(cors());
//db
mongoose.connect("mongodb+srv://dkcamargox:camargo1508@cluster0-zmptz.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
reqDir("./src/models");


//rota
app.use("/api" , require("./src/routes"));

app.listen(process.env.PORT || 3001);

