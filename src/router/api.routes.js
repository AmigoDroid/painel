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

const api = Router();
api.use("/filiais", filialRoutes);
api.use("/pedidos", pedidoRoutes);
api.use("/clientes", clienteRoutes);
api.use("/funcionarios", funcionarioRoutes);
api.use("/avaliacoes", avaliacaoRoutes);
api.use("/entregas", entregaRoutes);
api.use("/caixas", caixaRoutes);
api.use("/mesas", mesaRoutes);
api.use("/cardapio", cardapioRoutes);
api.use("/estoque", estoqueRoutes);

export default api;