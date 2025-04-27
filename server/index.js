// /index.js
import express from "express";
import cors from "cors"; // <== added this
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middlewares
app.use(cors()); // <== allow your React app to talk to backend
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
