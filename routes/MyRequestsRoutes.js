import express from "express";
import {
  createMyRequests,
  MyRequestsGet
} from "../controllers/MyRequestsController.js"; 

const router = express.Router();

router.post("/createMyRequests", createMyRequests);
router.get("/MyRequestsGet", MyRequestsGet);

export default router;
