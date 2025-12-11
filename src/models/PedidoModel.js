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
        },
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });

   

    return Pedido;
};
