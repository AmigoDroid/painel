import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * Gera hash da senha
 */
export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compara senha crua com hash
 */
export async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
