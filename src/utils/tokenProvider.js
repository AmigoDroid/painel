import jwt from "jsonwebtoken";
import { TOKEN_KEYS } from "../config/tokenKeys.js";

export function getToken(userData,time='1d') {
    if (!userData?.id) {
        throw new Error("Dados inválidos para gerar token");
    }

    const payload = {
        id: userData.id,
        nome: userData.nome,
        permissions: userData.permissions || [],
        filialId: userData.filialId || null
    };

    return jwt.sign(
        payload,
        TOKEN_KEYS.JWT_SECRET,
        { expiresIn: time }
    );
}
export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, TOKEN_KEYS.JWT_SECRET);
        return decoded;
    } catch (err) {
        throw new Error("Token inválido ou expirado");
    }
}