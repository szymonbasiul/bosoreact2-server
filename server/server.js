// import express from "express";

import express from "express";
import mysql from "mysql";
const app = express();
const port = process.env.PORT || 8000;
import cors from "cors";
app.use(cors());

app.use(express.json());

import rpsPlayerRoutes from "./rpsPlayerRoutes.js";

app.use("/rpsplayer", rpsPlayerRoutes);

app.listen(port, () => {
	console.log("Server on!");
});
