import { Router } from "express";


import login from "./login.routes.js";
import cadastroRoutes from "./cadastro.routes.js";
import api from "./api.routes.js";

const router = Router();

router.use("/api",api);
router.use("/login",login); 
router.use("/cadastro", cadastroRoutes);

export default router;
