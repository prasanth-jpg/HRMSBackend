import express from "express";
import {
  createNotification,
  notificationsGet
} from "../controllers/NotificationsController.js"; 

const router = express.Router();

router.post("/createNotification", createNotification);
router.get("/notificationsGet", notificationsGet);

export default router;
