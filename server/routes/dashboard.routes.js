import express from "express";
import { dashboardControler } from "../controllers/authController.js";
// import {authMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/dashboard",dashboardControler);

export default router;