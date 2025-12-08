import express from "express";
import {
  createExtraDeductions,
  ExtraDeductionsGet
} from "../controllers/ExtraDeductionsControllers.js"; 

const router = express.Router();

router.post("/createExtraDeductions", createExtraDeductions);
router.get("/ExtraDeductionsGet", ExtraDeductionsGet);

export default router;
