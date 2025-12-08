import express from "express";
import {
  createiTDeclarationsRoutes,
  iTDeclarationsRoutesGet
} from "../controllers/iTDeclarationsControllers.js"; 

const router = express.Router();

router.post("/createiTDeclarationsRoutes", createiTDeclarationsRoutes);
router.get("/iTDeclarationsRoutesGet", iTDeclarationsRoutesGet);

export default router;
