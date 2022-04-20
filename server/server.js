import express from"express"
//import mysql from "mysql"
import cors from "cors"
import rpsPlayerRoutes from './rpsPlayerRoutes.js'
import test from './test.js'

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/test', test)
app.use("/rpsplayer", rpsPlayerRoutes);
app.use("/test111",(req,res)=>{
	res.send({test:"123"})
})

app.listen(port, () => {
	console.log("Server on!",port);
});
6