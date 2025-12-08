import express from "express";
import {
  createPayDocuments,
  payDocumentsGet
} from "../controllers/payDocumentsController.js"; 

const router = express.Router();

router.post("/payDocuments", createPayDocuments);
router.get("/payDocumentsGet", payDocumentsGet);

export default router;
