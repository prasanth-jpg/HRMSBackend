import express from "express";
import {
  createtaxSheetRoutesRoutes,
  taxSheetRoutesRoutesGet
} from "../controllers/taxSheetControllers.js"; 

const router = express.Router();

router.post("/createtaxSheetRoutesRoutes", createtaxSheetRoutesRoutes);
router.get("/taxSheetRoutesRoutesGet", taxSheetRoutesRoutesGet);

export default router;
