import sequelize from "../data/config.js";

// Models
import FilialModel from "./FilialModel.js"
import PedidoModel from "./PedidoModel.js";
import ClienteModel from "./ClienteModel.js";
import FuncionarioModel from "./FuncionarioModel.js";
import AvaliacaoModel from "./AvaliacaoModel.js";
import EntregaModel from "./EntregaModel.js";
import CaixaModel from "./CaixaModel.js";
import MesaModel from "./MesaModel.js";
import CardapioModel from "./CardapioModel.js";
import EstoqueModel from "./EstoqueModel.js";

import applyAssociations from "./associations.js";

// Instanciar models
const models = {
    Filial: FilialModel(sequelize),
    Pedido: PedidoModel(sequelize),
    Cliente: ClienteModel(sequelize),
    Funcionario: FuncionarioModel(sequelize),
    Avaliacao: AvaliacaoModel(sequelize),
    Entrega: EntregaModel(sequelize),
    Caixa: CaixaModel(sequelize),
    Mesa: MesaModel(sequelize),
    Cardapio: CardapioModel(sequelize),
    Estoque: EstoqueModel(sequelize),
};

// Aplicar relacionamentos
applyAssociations(models);

export default {
    sequelize,
    ...models
}
