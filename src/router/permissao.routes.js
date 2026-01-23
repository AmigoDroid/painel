import { Router } from "express";
import controller from "../controllers/permissao.controller.js";

const permissions = Router();

permissions.post("/", controller.create);
permissions.get("/", controller.getAll);
permissions.get("/:funcionarioId", controller.getByFuncionario);
permissions.put("/:funcionarioId", controller.update);
permissions.delete("/:funcionarioId", controller.delete);

export default permissions;