import express from "express";
import {
  createActive,
  ActiveGet
} from "../controllers/ActiveControllers.js"; 

const router = express.Router();

router.post("/createActive", createActive);
router.get("/ActiveGet", ActiveGet);

export default router;
