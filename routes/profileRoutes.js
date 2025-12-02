import express from "express";
import { profileGet, createProfile } from "../controllers/profileController.js";

const router = express.Router();

router.post("/createProfile", createProfile);
router.get("/profileGet", profileGet);

export default router;
