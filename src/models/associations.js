// models/associations.js
export default function applyAssociations(models) {
    const {
        Filial,
        Pedido,
        Cardapio,
        Funcionario,
        Estoque,
        Cliente,
        Avaliacao,
        Entrega,
        Caixa,
        Mesas,
    } = models;

    // FILIAL -> várias tabelas
    Filial.hasMany(Pedido, { foreignKey: "filialId" });
    Pedido.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cardapio, { foreignKey: "filialId" });
    Cardapio.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Funcionario, { foreignKey: "filialId" });
    Funcionario.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Estoque, { foreignKey: "filialId" });
    Estoque.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cliente, { foreignKey: "filialId" });
    Cliente.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Avaliacao, { foreignKey: "filialId" });
    Avaliacao.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Entrega, { foreignKey: "filialId" });
    Entrega.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Caixa, { foreignKey: "filialId" });
    Caixa.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Mesas, { foreignKey: "filialId" });
    Mesas.belongsTo(Filial, { foreignKey: "filialId" });
}
