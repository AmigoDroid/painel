import express from "express";
import db from "./models/index.js";
import router from "./router/index.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Conectado ao PostgreSQL com sucesso!");

    await db.sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas com sucesso!");
  } catch (err) {
    console.error("Erro na conexão:", err);
  }
};

testConnection();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
