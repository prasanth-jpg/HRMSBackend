import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

console.log("Auth routes loaded"); // <--- DEBUG (optional)

router.post("/login", loginUser);

export default router;
