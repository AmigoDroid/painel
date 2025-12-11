import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Caixa = sequelize.define("Caixa", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dataAbertura: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        dataFechamento: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        valorInicial: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        valorFinal: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        entradas: { // todas as entradas registradas
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true,
            defaultValue: [],
        },
        saidas: { // todas as saídas registradas
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true,
            defaultValue: [],
        },
        observacoes: { // anotações gerais
            type: DataTypes.TEXT,
            allowNull: true,
        },
        status: { // aberto ou fechado
            type: DataTypes.ENUM('aberto','fechado'),
            defaultValue: 'aberto',
        }
    });

    Caixa.associate = (models) => {
        Caixa.belongsTo(models.Filial, { foreignKey: 'filialId' });
        Caixa.belongsTo(models.Funcionario, { foreignKey: 'funcionarioId' }); // quem abriu/fechou o caixa
    };

    return Caixa;
};
