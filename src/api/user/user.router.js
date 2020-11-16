import express from "express";
import { createUser, readUser } from "./user.controller";

const router = express.Router();

router.post("/user", createUser);
router.get("/user/:id?", readUser);

export default router;
