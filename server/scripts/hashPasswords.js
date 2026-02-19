import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import db from "../config/db.js";

dotenv.config();

const updatePasswords = async () => {
  try {
    const [users] = await db.query("SELECT Email, password FROM role");

    for (let user of users) {
      const hashed = await bcrypt.hash(user.password, 10);

      await db.query(
        "UPDATE role SET password = ? WHERE Email = ?",
        [hashed, user.id]
      );
    }

    console.log("✅ All passwords hashed successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
};

updatePasswords();
