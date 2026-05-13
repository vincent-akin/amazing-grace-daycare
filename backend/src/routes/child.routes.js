import express from "express";
import {
    getChildren,
    getChild,
    update,
    deactivate,
} from "../controllers/child.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getChildren);
router.get("/:id", authMiddleware, getChild);
router.patch("/:id", authMiddleware, update);
router.patch("/:id/deactivate", authMiddleware, deactivate);

export default router;