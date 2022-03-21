import express from "express";
import mysql from "mysql";

const dbCredentials = mysql.createConnection({
	user: "admin",
	host: "bosoreact2.cecmtuenja8x.us-east-2.rds.amazonaws.com",
	password: "password",
	database: "memory",
});

const router = express.Router();

router.post("/register", (req, res) => {
	const newUserName = req.body.registerNewUserName;
	const newPassword = req.body.registerNewPassword;
	dbCredentials.query(
		"CALL addNewUser(?,?)",
		[newUserName, newPassword],
		(error) => {
			if (error) console.log(error);
			console.log("New user added!", newUserName, newPassword);
			res.status();
		}
	);
});

// router.post("/", (req, res) => {});

console.log("Hello from memory!");

export default router;
