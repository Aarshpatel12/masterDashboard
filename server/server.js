// import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM dataset"; // ← replace with your real table name

  console.log(" API HIT: /data");
  console.log(" SQL QUERY:", sql);

  db.query(sql, (err, results) => {
    if (err) {
      console.error(" QUERY ERROR:");
      console.error("CODE:", err.code);
      console.error("MESSAGE:", err.message);
      return res.status(500).json(err);
    }

    console.log(" Rows fetched:", results.length);
    console.log(" Sample row:", results[0]); // first row only

    res.json(results);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
