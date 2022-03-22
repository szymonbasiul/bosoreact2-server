// import express from "express";

const express = require("express")
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/rpsplayer", require("./rpsPlayerRoutes.tsx"));
app.use("/test111",(req,res)=>{
	res.send({test:"123"})
})

app.listen(port, () => {
	console.log("Server on!",port);
});
6