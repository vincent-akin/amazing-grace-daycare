import express from "express";
import {
    submitAdmission,
    getAdmissions,
    approve,
    reject,
} from "../controllers/admission.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.post("/", submitAdmission);

// Admin Protected
router.get("/", authMiddleware, getAdmissions);
router.patch("/:id/approve", authMiddleware, approve);
router.patch("/:id/reject", authMiddleware, reject);

export default router;