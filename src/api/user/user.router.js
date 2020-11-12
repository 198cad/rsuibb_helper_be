import express from "express";
import { createUser } from "./user.controller";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", (req, res) => {
  res.send("hello");
});

export default router;
