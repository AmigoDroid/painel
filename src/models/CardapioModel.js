import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Cardapio = sequelize.define("Cardapio", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: { // nome do item
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: { // descrição do item
            type: DataTypes.TEXT,
            allowNull: true,
        },
        preco: { // preço do item
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        categoria: { // exemplo: bebidas, salgados, doces
            type: DataTypes.STRING,
            allowNull: true,
        },
        disponibilidade: { // se o item está disponível
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        imagem: { // URL da imagem do item
            type: DataTypes.STRING,
            allowNull: true,
        },
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });

   
    return Cardapio;
};
