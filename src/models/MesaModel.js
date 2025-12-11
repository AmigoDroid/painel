import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Mesa = sequelize.define("Mesa", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        numero: { // número da mesa
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        codigoQR: { // string única para gerar QR code
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: { // livre, ocupada, reservada
            type: DataTypes.ENUM('livre','ocupada','reservada'),
            defaultValue: 'livre',
        }
    });

    Mesa.associate = (models) => {
        Mesa.belongsTo(models.Filial, { foreignKey: 'filialId' });
        Mesa.hasMany(models.Pedido, { foreignKey: 'mesaId' });
    };

    return Mesa;
};
