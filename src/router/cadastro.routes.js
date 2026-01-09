import { Router } from "express";
import controllerCliente from "../controllers/cliente.controller.js";
import controllerFuncionario from "../controllers/funcionario.controller.js";

const cadastro = Router();

cadastro.post("/", ()=>{});
cadastro.post("/admin", ()=>{});

export default cadastro;
