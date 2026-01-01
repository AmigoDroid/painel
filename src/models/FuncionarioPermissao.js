// models/FuncionarioPermissao.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const FuncionarioPermissao = sequelize.define("FuncionarioPermissao", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    funcionarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    permission: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    }
  });

  return FuncionarioPermissao;
};
