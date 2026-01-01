import { Router } from "express";
import controller from "../controllers/filial.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {requirePermission} from "../middlewares/requirePermission.js";
import { PERMISSIONS } from "../config/permissions.js";

const router = Router();

router.get("/",authMiddleware,controller.getAll);

router.get("/:id",authMiddleware, controller.getById);
router.post("/",authMiddleware,requirePermission(PERMISSIONS.ADMIN), controller.create);
router.put("/:id", authMiddleware,requirePermission(PERMISSIONS.ADMIN), controller.update);
router.delete("/:id", authMiddleware,requirePermission(PERMISSIONS.ADMIN), controller.delete);

export default router;
