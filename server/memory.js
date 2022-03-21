import express from "express";
import mysql from "mysql";

const dbCredentials = mysql.createConnection({
	user: "admin",
	host: "bosoreact2.cecmtuenja8x.us-east-2.rds.amazonaws.com",
	password: "password",
	database: "bosoreact2",
});

const router = express.Router();

router.post("/register", (req, res) => {
	const newUserName = req.body.registerNewUserName;
	const newPassword = req.body.registerNewPassword;
	dbCredentials.query(
		"CALL addNewUser(?,?)",
		[newUserName, newPassword],
		(error) => {
			if (error) {
				console.log(error);
				res.status(500).json({ message: "Failed" });
				return;
			}

			console.log("New user added!", newUserName, newPassword);
			res.status(200).json({ message: "Success" });
		}
	);
});

// router.post("/", (req, res) => {});

console.log("Hello! from memory!");

export default router;
