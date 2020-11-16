import express from "express";
const router = express.Router();
import authRoute from "./authentication/auth.router";
import userRoute from "./user/user.router";

router.use("/api/v1/", authRoute);
router.use("/api/v1/", userRoute);

export default router;
