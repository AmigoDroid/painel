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
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        },
        endereco: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0.0
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
             defaultValue: 0.0
        },
        status: {
            type: DataTypes.ENUM('ativo','inativo'),
            defaultValue: 'ativo',
        },
        pontosFidelidade: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        filialId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

  

    return Cliente;
};
