import express from "express";
import {
  createExtraPayments,
  ExtraPaymentsGet
} from "../controllers/ExtraPaymentsControllers.js"; 

const router = express.Router();

router.post("/createExtraPayments", createExtraPayments);
router.get("/ExtraPaymentsGet", ExtraPaymentsGet);

export default router;
