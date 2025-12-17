import { hasPermission } from "../utils/permissionHelper.js";

export default function requirePermission(permission) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }

        if (!hasPermission(req.user, permission)) {
            return res.status(403).json({ error: "Acesso negado" });
        }
        next(); 
    };
}
