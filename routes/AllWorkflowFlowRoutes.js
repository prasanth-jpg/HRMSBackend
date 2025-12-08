import express from "express";
import {
  createAllWorkflowFlow,
  AllWorkflowFlowGet
} from "../controllers/AllWorkflowFlowControllers.js"; 

const router = express.Router();

router.post("/createAllWorkflowFlow", createAllWorkflowFlow);
router.get("/allWorkflowFlowGet", AllWorkflowFlowGet);

export default router;
