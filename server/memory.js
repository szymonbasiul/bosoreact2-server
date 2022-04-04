import express from "express";
import mysql from "mysql";

const dbCredentials = mysql.createConnection({
	user: "admin",
	host: "sl-eu-gb-p01.dblayer.com",
	password: "HUAQOVSXZDHGZMFJ",
	database: "user",
	port: 20473,
});

const router = express.Router();

// send logIn request from login input form to server, then get response logged
router.post("/login", (req, res) => {
	const loginChecker = req.body.login;
	const passwordChecker = req.body.password;
	dbCredentials.query(
		"SELECT userPassword FROM users WHERE userName = (?)",
		[loginChecker],
		(err, response) => {
			if (err) {
				return console.log(err);
			}
			console.log(passwordChecker, response[0].userPassword);
			if (
				JSON.stringify(passwordChecker) ===
				JSON.stringify(response[0].userPassword)
			) {
				res.json({ loginVerified: true });
			}
		}
	);
});

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
