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
        Mesa
    } = models;


    // ==========================
    // FILIAL → Todas as tabelas
    // ==========================
    Filial.hasMany(Pedido, { foreignKey: "filialId" });
    Pedido.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cliente, { foreignKey: "filialId" });
    Cliente.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Funcionario, { foreignKey: "filialId" });
    Funcionario.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cardapio, { foreignKey: "filialId" });
    Cardapio.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Estoque, { foreignKey: "filialId" });
    Estoque.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Avaliacao, { foreignKey: "filialId" });
    Avaliacao.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Entrega, { foreignKey: "filialId" });
    Entrega.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Caixa, { foreignKey: "filialId" });
    Caixa.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Mesa, { foreignKey: "filialId" });
    Mesa.belongsTo(Filial, { foreignKey: "filialId" });


    // ==========================
    // RELAÇÕES ESPECÍFICAS
    // ==========================

    // Pedido → Cliente
    Cliente.hasMany(Pedido, { foreignKey: "clienteId" });
    Pedido.belongsTo(Cliente, { foreignKey: "clienteId" });

    // Pedido → Mesa (opcional)
    Mesa.hasMany(Pedido, { foreignKey: "mesaId" });
    Pedido.belongsTo(Mesa, { foreignKey: "mesaId" });

    // Pedido → Entrega (opcional)
    Entrega.hasOne(Pedido, { foreignKey: "entregaId" });
    Pedido.belongsTo(Entrega, { foreignKey: "entregaId" });

    // Avaliação → Pedido
    Pedido.hasMany(Avaliacao, { foreignKey: "pedidoId" });
    Avaliacao.belongsTo(Pedido, { foreignKey: "pedidoId" });

    // Avaliação → Funcionario
    Funcionario.hasMany(Avaliacao, { foreignKey: "funcionarioId" });
    Avaliacao.belongsTo(Funcionario, { foreignKey: "funcionarioId" });

}
