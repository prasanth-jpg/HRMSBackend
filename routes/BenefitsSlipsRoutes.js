import express from "express";
import {
  createBenefitsSlips,
  BenefitsSlipsGet
} from "../controllers/BenefitsSlipsControllers.js"; 

const router = express.Router();

router.post("/createBenefitsSlips", createBenefitsSlips);
router.get("/BenefitsSlipsGet", BenefitsSlipsGet);

export default router;
