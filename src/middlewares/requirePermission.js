import { hasPermission,hasAnyPermission,hasAllPermissions } from "../utils/permissionHelper.js";

export function requirePermission(required) {
  return (req, res, next) => {
    if (!req.user) return res.sendStatus(401);

    const ok = Array.isArray(required)
      ? hasAllPermissions(req.user, required)
      : hasPermission(req.user, required);

    if (!ok) return res.sendStatus(403);

    next();
  };
}
