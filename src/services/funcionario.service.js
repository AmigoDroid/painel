import db from "../models/index.js";
import { isValidEmail } from "../utils/validators.js";
import { hashPassword } from "../utils/password.js";

class FuncionarioService {

  async create(data) {
    const {
      nome,
      email,
      senha,
      cargo,
      telefone,
      filialId,
      status
    } = data;

    // 🔒 Validações básicas
    if (!nome || !email || !senha || !cargo || !filialId) {
      throw new Error("Campos obrigatórios não informados");
    }

    if (!isValidEmail(email)) {
      throw new Error("Formato de e-mail inválido");
    }

    // 🔍 Verifica duplicidade de e-mail
    const exists = await db.Funcionario.findOne({
      where: { email }
    });

    if (exists) {
      throw new Error("Já existe um funcionário com este e-mail");
    }

    // 🔐 Hash da senha
    const senhaHash = await hashPassword(senha);

    // ✅ Criação segura
    const funcionario = await db.Funcionario.create({
      nome,
      email,
      senha: senhaHash,
      cargo,
      telefone: telefone || null,
      filialId,
      status: status || "ativo"
    });

    // 🧼 Nunca retorna senha
    const { senha: _, ...safeData } = funcionario.dataValues;

    return safeData;
  }

  async update(id, data) {
    const funcionario = await db.Funcionario.findByPk(id);

    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    // Se atualizar email, validar
    if (data.email && !isValidEmail(data.email)) {
      throw new Error("Formato de e-mail inválido");
    }

    // Se atualizar senha, gerar hash
    if (data.senha) {
      data.senha = await hashPassword(data.senha);
    }

    await funcionario.update(data);

    const { senha, ...safeData } = funcionario.dataValues;
    return safeData;
  }

  async delete(id) {
    const funcionario = await db.Funcionario.findByPk(id);

    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    await funcionario.destroy();
    return { success: true };
  }

  async getById(id) {
    const funcionario = await db.Funcionario.findByPk(id, {
      attributes: { exclude: ["senha"] }
    });

    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    return funcionario;
  }

  async getAll() {
    return await db.Funcionario.findAll({
      attributes: { exclude: ["senha"] }
    });
  }
}

export default new FuncionarioService();
