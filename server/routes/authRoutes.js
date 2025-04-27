// /routes/authRoutes.js
import { Router } from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../lib/db.js";

const router = Router();

// Sign up route (already created)
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const db = await connectDB();

    // Check if user already exists
    const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    res.status(200).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error!" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required!" });
  }

  try {
    const db = await connectDB();

    // Check if user exists
    const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: "User not found!" });
    }

    // Compare password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful!" });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error!" });
  }
});

export default router;
