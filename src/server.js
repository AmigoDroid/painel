import express from "express";
import db from "./models/index.js";
import router from "./router/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

async function startServer() {
  try {
    await db.sequelize.authenticate();
    console.log("PostgreSQL conectado");

    if (process.env.NODE_ENV === "development") {
      await db.sequelize.sync({ force: true });
      console.log("Sync em modo desenvolvimento");
    }

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error("Falha crítica ao iniciar o servidor:", err);
    process.exit(1);
  }
}

startServer();
