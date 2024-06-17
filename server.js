"use strict";

import express from "express";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("dev"));
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});
