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
        },
        filialId: {
    type: DataTypes.INTEGER,
    allowNull: false,
}

    });

   

    return Mesa;
};
