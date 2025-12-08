import express from "express";
import {
  createIndividualFeedBack,
  IndividualFeedBackGet
} from "../controllers/individualFeedBackControllers.js"; 

const router = express.Router();

router.post("/createIndividualFeedBack", createIndividualFeedBack);
router.get("/IndividualFeedBackGet", IndividualFeedBackGet);

export default router;
