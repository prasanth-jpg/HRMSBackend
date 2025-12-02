import express from "express";
import { clockAction, getTodayAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/clock", clockAction);
router.get("/today/:userId", getTodayAttendance);

export default router;