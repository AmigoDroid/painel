import { Router } from "express";
import controllerCliente from "../controllers/cliente.controller.js";
import controllerFuncionario from "../controllers/funcionario.controller.js";

const cadastro = Router();

// Cadastro de cliente
cadastro.post("/", controllerCliente.create);

// Cadastro de administrador / funcionário
cadastro.post("/admin", controllerFuncionario.create);

export default cadastro;
