import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Cliente = sequelize.define("Cliente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('ativo','inativo'),
            defaultValue: 'ativo',
        },
        pontosFidelidade: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });

    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Filial, { foreignKey: 'filialId' });
        Cliente.hasMany(models.Pedido, { foreignKey: 'clienteId' });
        Cliente.hasMany(models.Log, { foreignKey: 'clienteId' });
        Cliente.hasMany(models.Avaliacao, { foreignKey: 'clienteId' });
    };

    return Cliente;
};
