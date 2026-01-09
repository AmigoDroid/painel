import { Router } from "express";
import LoginController from "../controllers/login.controller.js";

const login = Router();

login.post("/", LoginController.login);
login.post("/admin", LoginController.adminLogin);

export default login; 