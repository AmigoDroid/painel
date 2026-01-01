import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Funcionario = sequelize.define("Funcionario", {
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
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cargo: {
            type: DataTypes.STRING, // Ex.: Garçom, Cozinha, Gerente
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('ativo','inativo'),
            defaultValue: 'ativo',
        },
        filialId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

   

    return Funcionario;
};
