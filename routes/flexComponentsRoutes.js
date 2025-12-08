import express from "express";
import {
  createflexComponents,
  flexComponentsGet
} from "../controllers/flexComponentsControllers.js"; 

const router = express.Router();

router.post("/createflexComponents", createflexComponents);
router.get("/flexComponentsGet", flexComponentsGet);

export default router;
