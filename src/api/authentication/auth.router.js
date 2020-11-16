import express from "express";
import { createPermit } from "./permit.controller";
import { checkToken, login } from "./auth.controller";
import { createService, deleteService, readService, updateService } from "./service.controller";
import { createRole, deleteRole, readRole, updateRole } from "./role.controllers";
const router = express.Router();

router.post("/auth/service", createService);
router.get("/auth/service/:id?", readService);
router.patch("/auth/service/:id", updateService);
router.delete("/auth/service/:id", deleteService);
router.post("/auth/login", login);
router.get("/auth/token", checkToken);
router.post("/auth/role", createRole);
router.get("/auth/role/:id?", readRole);
router.patch("/auth/role/:id", updateRole);
router.delete("/auth/role/:id", deleteRole);
router.post("/auth/permit", createPermit);

export default router;
