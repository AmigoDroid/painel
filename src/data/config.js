import Sequelize from "sequelize";
import { TOKEN_KEYS } from "../config/tokenKeys.js";

const sequelize = new Sequelize(
  TOKEN_KEYS.POSTGRES_DB,
  TOKEN_KEYS.POSTGRES_USER,
  TOKEN_KEYS.POSTGRES_PASSWORD,
  {
    host: TOKEN_KEYS.POSTGRES_HOST,
    dialect: "postgres",
    port: TOKEN_KEYS.POSTGRES_PORT,
  logging: false, // opcional
});


export default sequelize;
