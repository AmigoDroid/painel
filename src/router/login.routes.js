import { Router } from "express";
import LoginController from "../controllers/login.controller.js";

const login = Router();

login.post("/", LoginController.login);

export default login;