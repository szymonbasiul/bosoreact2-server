// import express from "express";

import express from "express";
// import mysql from "mysql";
const app = express();
const port = process.env.PORT || 8000;
import cors from "cors";
app.use(cors());

app.use(express.json());

import rpsPlayerRoutes from "./rpsPlayerRoutes.js";
import memory from "./memory.js";

app.use("/rpsplmayer", rpsPlayerRoutes);
app.use("/memory", memory);

app.listen(port, () => {
	console.log("Server on!");
});
