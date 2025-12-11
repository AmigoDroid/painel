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
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });



    return Filial;
};
