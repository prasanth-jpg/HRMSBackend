import express from "express";
import {
  createDrafts,
  DraftsGet
} from "../controllers/DraftsControllers.js"; 

const router = express.Router();

router.post("/createDrafts", createDrafts);
router.get("/DraftsGet", DraftsGet);

export default router;
