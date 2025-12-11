import express from "express";
import sequelize from "./data/config.js";
import FilialModel from "./models/FilialModel.js";
import PedidoModel from "./models/PedidoModel.js";
import ClienteModel from "./models/ClienteModel.js";
import FuncionarioModel from "./models/FuncionarioModel.js";
import AvaliacaoModel from "./models/AvaliacaoModel.js";
import EntregaModel from "./models/EntregaModel.js";
import CaixaModel from "./models/CaixaModel.js";
import MesasModel from "./models/MesasModel.js";
import CardapioModel from "./models/CardapioModel.js";
import EstoqueModel from "./models/EstoqueModel.js";

// Carregar models
const models = {
    Filial: FilialModel(sequelize),
    Pedido: PedidoModel(sequelize),
    Cardapio: CardapioModel(sequelize),
    Funcionario: FuncionarioModel(sequelize),
    Estoque: EstoqueModel(sequelize),
    Cliente: ClienteModel(sequelize),
    Avaliacao: AvaliacaoModel(sequelize),
    Entrega: EntregaModel(sequelize),
    Caixa: CaixaModel(sequelize),
    Mesas: MesasModel(sequelize),
};

// Aplicar relacionamentos
applyAssociations(models);


const app = express();
const PORT = process.env.PORT || 3000;

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao PostgreSQL com sucesso!");
     // Sincroniza os modelos com o banco de dados
     await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas com sucesso!");

  } catch (err) {
    console.error("Erro na conexão:", err);
  }
};
testConnection();
