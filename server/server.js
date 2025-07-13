import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bugRoutes from "./src/routes/bugRoutes.js";
import errorHandler from "./src/middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/bugs", bugRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error("DB connection error:", err));

export default app; // for testing
