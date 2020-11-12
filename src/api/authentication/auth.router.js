import express from "express";
import { createService, readService } from "./service.controller";
const router = express.Router();

router.post("/service", createService);
router.get("/service/:key?", readService);

export default router;
