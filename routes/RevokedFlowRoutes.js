import express from "express";
import {
  createRevokedFlow,
  RevokedFlowGet
} from "../controllers/RevokedFlowControllers.js"; 

const router = express.Router();

router.post("/createRevokedFlow", createRevokedFlow);
router.get("/RevokedFlowGet", RevokedFlowGet);

export default router;
