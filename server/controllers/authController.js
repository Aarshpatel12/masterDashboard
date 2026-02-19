import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDashboardData } from "../models/model.js";




export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];

    // Direct comparison (plain text)
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // console.log(process.env.JWT_SECRET)
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false
    });

    res.json({ role: user.role });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const dashboardControler = async (req, res) => {
    try {
        const role = req.user.role;
        const rows = await getDashboardData(role);
        res.json(rows);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};
