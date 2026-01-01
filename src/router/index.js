import { Router } from "express";

import filialRoutes from "./filial.routes.js";
import pedidoRoutes from "./pedido.routes.js";
import clienteRoutes from "./cliente.routes.js";
import funcionarioRoutes from "./funcionario.routes.js";
import avaliacaoRoutes from "./avaliacao.routes.js";
import entregaRoutes from "./entrega.routes.js";
import caixaRoutes from "./caixa.routes.js";
import mesaRoutes from "./mesa.routes.js";
import cardapioRoutes from "./cardapio.routes.js";
import estoqueRoutes from "./estoque.routes.js";

const router = Router();

router.use("/filiais", filialRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/clientes", clienteRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/avaliacoes", avaliacaoRoutes);
router.use("/entregas", entregaRoutes);
router.use("/caixas", caixaRoutes);
router.use("/mesas", mesaRoutes);
router.use("/cardapio", cardapioRoutes);
router.use("/estoque", estoqueRoutes);
router.use("/login"); // Rota de login para clientes que ainda vou criar
router.use("/admin/login"); // Rota de login para funcionários que ainda vou criar

export default router;
