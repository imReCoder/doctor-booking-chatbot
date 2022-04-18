"use strict"
dotenv.config()
import dotenv from "dotenv";
import express from "express";
import router from "./routes.js";
import bodyParser from "body-parser";


const app = express();

app.listen(3434, () => {
  console.log("app listening on port 3434!!!")
})

app.use(bodyParser.json());
app.use("/api", router);
