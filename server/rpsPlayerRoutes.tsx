const express = require("express");
const mysql = require("mysql");

const dbCredentials = mysql.createConnection({
	user: "admin",
	host: "bosoreact2.cecmtuenja8x.us-east-2.rds.amazonaws.com",
	password: "password",
	database: "bosoreact2",
});

const router = express.Router();

router.get("/", (req, res) => {
	// dbCredentials.query("SELECT * FROM rps_player", (error, results) => {
	// 	error && console.error(error);
	// 	console.log(results);
	// 	res.json(results);
	// });
	// console.log(req.body);
});


router.post("/", (req, res) => {
	console.log(req.body);
	res.send(req.body);
	
});

router.delete("/:playername", (req, res) => {
	const pname = req.params.playername;
	dbCredentials.query(
		"DELETE FROM rps_player WHERE playername=(?)",
		[pname],
		(error) => {
			error && console.error(error);
			console.log("User deleted!");
			res.status(200).json({ msg: "User deleted" });
		}
	);
});

module.exports = router;
