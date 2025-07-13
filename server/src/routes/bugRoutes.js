import express from "express";
import {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
} from "../controllers/bugController.js";

const router = express.Router();

router.get("/", getBugs);
router.post("/", createBug);
router.put("/:id", updateBug);
router.delete("/:id", deleteBug);

export default router;
