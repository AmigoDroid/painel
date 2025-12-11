import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Pedido = sequelize.define("Pedido", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM('novo','em_preparo','pronto','entregue','cancelado'),
            defaultValue: 'novo',
        },
        valorTotal: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        itens: { // array de itens do cardápio em JSON
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
        observacoes: { // observações adicionais do cliente
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    Pedido.associate = (models) => {
        Pedido.belongsTo(models.Filial, { foreignKey: 'filialId' });
        Pedido.belongsTo(models.Mesa, { foreignKey: 'mesaId', allowNull: true });
        Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId', allowNull: true });
        Pedido.belongsTo(models.Funcionario, { foreignKey: 'funcionarioId', allowNull: true });
    };

    return Pedido;
};
