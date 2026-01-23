import { Router } from "express";
import controller from "../controllers/filial.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {requirePermission} from "../middlewares/requirePermission.js";
import { PERMISSIONS } from "../config/permissions.js";

const router = Router();

router.get("/",controller.getAll);

router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id",  controller.delete);

export default router;
