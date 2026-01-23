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
        Mesa,
        FuncionarioPermissao
    } = models;

    // ==========================
    // FILIAL → Todas as tabelas
    // ==========================
    Filial.hasMany(Pedido, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Pedido.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cliente, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Cliente.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Funcionario, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Funcionario.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Cardapio, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Cardapio.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Estoque, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Estoque.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Avaliacao, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Avaliacao.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Entrega, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Entrega.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Caixa, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Caixa.belongsTo(Filial, { foreignKey: "filialId" });

    Filial.hasMany(Mesa, {
        foreignKey: "filialId",
        onDelete: "RESTRICT"
    });
    Mesa.belongsTo(Filial, { foreignKey: "filialId" });

    // ==========================
    // RELAÇÕES ESPECÍFICAS
    // ==========================

    // Pedido → Cliente
    Cliente.hasMany(Pedido, {
        foreignKey: "clienteId",
        onDelete: "RESTRICT"
    });
    Pedido.belongsTo(Cliente, { foreignKey: "clienteId" });

    // Pedido → Mesa (opcional)
    Mesa.hasMany(Pedido, {
        foreignKey: "mesaId",
        onDelete: "SET NULL"
    });
    Pedido.belongsTo(Mesa, { foreignKey: "mesaId" });

    // Pedido → Entrega (opcional)
    Entrega.hasOne(Pedido, {
        foreignKey: "entregaId",
        onDelete: "SET NULL"
    });
    Pedido.belongsTo(Entrega, { foreignKey: "entregaId" });

    // Avaliação → Pedido
    Pedido.hasMany(Avaliacao, {
        foreignKey: "pedidoId",
        onDelete: "CASCADE"
    });
    Avaliacao.belongsTo(Pedido, { foreignKey: "pedidoId" });

    // Avaliação → Funcionario
    Funcionario.hasMany(Avaliacao, {
        foreignKey: "funcionarioId",
        onDelete: "SET NULL"
    });
Funcionario.hasOne(FuncionarioPermissao, {
  foreignKey: "funcionarioId",
  as: "permissoes",
  onDelete: "CASCADE"
});

FuncionarioPermissao.belongsTo(Funcionario, {
  foreignKey: "funcionarioId",
  as: "funcionario"
});

    Avaliacao.belongsTo(Funcionario, { foreignKey: "funcionarioId" });
}
