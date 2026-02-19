



import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "$$#1234abc@123",
  
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.log()
    console.error(" MySQL connection failed:");
    console.error("CODE:", err.code);
    console.error("MESSAGE:", err.message);
  } else {
    console.log(" MySQL connected successfully");
    connection.release();
  }
});

export default db.promise();
