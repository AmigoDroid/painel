import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Filial = sequelize.define("Filial", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });

    Filial.associate = (models) => {
        Filial.hasMany(models.Pedido, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Cardapio, { foreignKey: "filialId" });
        Filial.hasMany(models.Funcionario, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Estoque, { foreignKey: "filialId" });
        Filial.hasMany(models.Cliente, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Avaliacao, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Entrega, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Caixa, { foreignKey: "filialId" });//ok
        Filial.hasMany(models.Mesas, { foreignKey: "filialId" });//ok
    };

    return Filial;
};
