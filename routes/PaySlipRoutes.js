import express from "express";
import { paySlipGet, createPaySlip } from "../controllers/PaySlipsController.js";

const router = express.Router();

router.post("/createPaySlip", createPaySlip);
router.get("/paySlipGet", paySlipGet);

export default router;
