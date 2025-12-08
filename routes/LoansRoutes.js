import express from "express";
import {
  createLoans,
  loansGet
} from "../controllers/LoansController.js"; 

const router = express.Router();

router.post("/loans", createLoans);
router.get("/loanGet", loansGet);

export default router;
