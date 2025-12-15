import { PERMISSIONS } from "../config/permissions.js";

export function hasPermission(user, permission) {
    if (!user || !Array.isArray(user.permissions)) return false;

    // ADMIN tem acesso total
    if (user.permissions.includes(PERMISSIONS.ADMIN)) return true;

    return user.permissions.includes(permission);
}

export function hasAnyPermission(user, permissions = []) {
    if (!user || !Array.isArray(user.permissions)) return false;

    if (user.permissions.includes(PERMISSIONS.ADMIN)) return true;

    return permissions.some(p => user.permissions.includes(p));
}

export function hasAllPermissions(user, permissions = []) {
    if (!user || !Array.isArray(user.permissions)) return false;

    if (user.permissions.includes(PERMISSIONS.ADMIN)) return true;

    return permissions.every(p => user.permissions.includes(p));
}
