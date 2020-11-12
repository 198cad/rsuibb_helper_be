import express from "express";
import authRoute from "./authentication/auth.router";
const router = express.Router();

router.use("/api/v1/", authRoute);

export default router;
