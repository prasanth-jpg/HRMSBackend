import express from "express";
import {
  createCompletedFlow,
  CompletedFlowGet
} from "../controllers/CompletedFlowControllers.js"; 

const router = express.Router();

router.post("/createCompletedFlow", createCompletedFlow);
router.get("/CompletedFlowGet", CompletedFlowGet);

export default router;
