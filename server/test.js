import express from "express";
import mysql from 'serverless-mysql'
const db = mysql({
      config: {
        host: 'sl-eu-gb-p01.dblayer.com',
        database: "user",
        user: "admin",
        password: 'HUAQOVSXZDHGZMFJ',
        port: 20473,	
    }
})
const router = express.Router();

router.get('/',async (req,res)=>{
    //let response = await db.query("SELECT * FROM users")
    let response = await db.transaction()
        .query("SELECT * FROM users")
        .rollback(e => {return e})
        .commit()
    res.json({res:response})
  })

export default router;