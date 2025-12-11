import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Avaliacao = sequelize.define("Avaliacao", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nota: { // nota de 1 a 5
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        comentario: { // comentário do cliente
            type: DataTypes.TEXT,
            allowNull: true,
        },
        data: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        tipo: { // tipo de avaliação
            type: DataTypes.ENUM('filial','pedido','funcionario'),
            allowNull: false,
            defaultValue: 'filial',
        },
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });

   

    return Avaliacao;
};
