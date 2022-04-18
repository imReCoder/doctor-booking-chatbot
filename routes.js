import express from "express";
const router = express.Router();
import * as chatController from "./chat.controller.js";


router.post("/chat",chatController.newChat);
router.get("/",chatController.get);
export default router;