import jwt from "jsonwebtoken";
import { TOKEN_KEYS } from "../config/tokenKeys.js";

const JWT_SECRET = TOKEN_KEYS.JWT_SECRET;
console.log("SECRET: "+JWT_SECRET);

export default function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;



    if (!authHeader) {
        return res.status(401).json({ error: "Token não informado" });
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({ error: "Token malformado" });
    }

    const [scheme, token] = parts;

    if (scheme !== "Bearer") {
        return res.status(401).json({ error: "Formato do token inválido" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // ✅ AQUI

        req.user = {
            id: decoded.id,
            permissions: decoded.permissions,
            filialId: decoded.filialId
        };

        return next();
    } catch (err) {
        console.error("JWT ERROR:", err.message);
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }

    
}
