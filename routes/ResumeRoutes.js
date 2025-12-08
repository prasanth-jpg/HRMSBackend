import express from "express";
import {
  createResumeRoutesRoutes,
  ResumeRoutesRoutesGet
} from "../controllers/ResumeRoutesControllers.js"; 

const router = express.Router();

router.post("/createResumeRoutesRoutes", createResumeRoutesRoutes);
router.get("/ResumeRoutesRoutesGet", ResumeRoutesRoutesGet);

export default router;
