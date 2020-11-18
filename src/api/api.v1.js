import express from "express";
const router = express.Router();
import authRoute from "./authentication/auth.router";
import userRoute from "./user/user.router";
import poliRoute from "./bpjs_antrean_poli/antrean_poli.router";

router.use("/api/v1/", poliRoute);
router.use("/api/v1/", authRoute);
router.use("/api/v1/", userRoute);

export default router;
