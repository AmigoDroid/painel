import express from "express";
import db from "./models/index.js";
import router from "./router/index.js";
import { TOKEN_KEYS } from "./config/tokenKeys.js";

import getSintax from "./middlewares/ErroSintaxJson.js";
import error404 from "./middlewares/Error404.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = TOKEN_KEYS.PORT;


/* ==========================
   MIDDLEWARES
========================== */
app.use(express.json());

/* ==========================
   ROTAS
========================== */
app.use(router);

/* ==========================
   ERROS
========================== */
app.use(getSintax);     // JSON inválido
app.use(error404);      // rota não encontrada
app.use(errorHandler);  // QUALQUER outro erro 🔥

/* ==========================
   START
========================== */
async function startServer() {
    try {
        await db.sequelize.authenticate();
        console.log("PostgreSQL conectado");

        if (TOKEN_KEYS.NODE_ENV === "development") {
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
