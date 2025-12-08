import express from "express";
import {
  createPayPackage,
  paypackageGet
} from "../controllers/payPackagesController.js"; 

const router = express.Router();

router.post("/paypackages", createPayPackage);
router.get("/paypackageGet", paypackageGet);

export default router;
