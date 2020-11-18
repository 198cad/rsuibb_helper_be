import express from "express";
import { antreanPoli, rekapAntrean } from "./antrean_poli.controller";

const router = express.Router();

router.post("/poli", antreanPoli);
router.post("/get-rekap-poli", rekapAntrean);

export default router;
