import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Estoque = sequelize.define("Estoque", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: { // nome do produto/insumo
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantidade: { // quantidade em estoque
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        unidade: { // exemplo: kg, litro, unidade
            type: DataTypes.STRING,
            allowNull: true,
        },
        minimo: { // quantidade mínima para alerta de reposição
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        precoUnitario: { // preço do item para controle financeiro
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        status: { // disponível ou indisponível
            type: DataTypes.ENUM('disponivel','indisponivel'),
            defaultValue: 'disponivel',
        },
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });



    return Estoque;
};
