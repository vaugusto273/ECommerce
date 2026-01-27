import fs from "fs";
import path from "path";
import db from "./connection.js";

export function initDb() {
	const schemaPath = path.resolve("db/schema.sql");
	const schema = fs.readFileSync(schemaPath, "utf-8");

	try {
		db.exec(schema);
		console.log("Database successfully initialized");
	} catch (err) {
		console.error("Error on initialize the database: ", err.message);
	}
}
