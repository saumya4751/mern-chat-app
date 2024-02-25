import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.get("/:id", protectRoute, getMessages); //protectRoute a middleware
router.post("/send/:id", protectRoute, sendMessage); //protectRoute a middleware

export default router;