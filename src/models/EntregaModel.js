import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Entrega = sequelize.define("Entrega", {
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
            type: DataTypes.ENUM('pendente', 'em_transito', 'entregue', 'cancelada'),
            defaultValue: 'pendente',
        },
        latitudeCliente: { // localização do cliente no momento da entrega
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitudeCliente: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        observacoes: { // observações da entrega
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    Entrega.associate = (models) => {
        Entrega.belongsTo(models.Pedido, { foreignKey: 'pedidoId' });
        Entrega.belongsTo(models.Funcionario, { foreignKey: 'entregadorId' }); // funcionário que entregou
        Entrega.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
        Entrega.belongsTo(models.Filial, { foreignKey: 'filialId' });
    };

    return Entrega;
};
