import Sequelize from "sequelize";

const sequelize = new Sequelize("ProntoDelivery_DB", "postgres", "5824", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false, // opcional
});


export default sequelize;
