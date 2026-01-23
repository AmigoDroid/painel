import db from "../models/index.js";
import { AppError } from "../utils/AppErro.js";
import { Op } from "sequelize";
import { hashPassword } from "../utils/password.js";

const { Cliente } = db;

class ClienteService {

  /* ==========================
     CREATE
  ========================== */
  async create(data) {
    const clienteData = await this._sanitizeCreateData(data);
    this._validateCreate(clienteData);

    // Verifica duplicidade (CPF OU email)
    const exists = await Cliente.findOne({
      where: {
        [Op.or]: [
          { cpf: clienteData.cpf },
          { email: clienteData.email }
        ]
      }
    });

    if (exists) {
      if (exists.cpf === clienteData.cpf) {
        throw new AppError("Já existe um cliente cadastrado com este CPF", 409);
      }
      if (exists.email === clienteData.email) {
        throw new AppError("Já existe um cliente cadastrado com este e-mail", 409);
      }
    }

    try {
      return await Cliente.create(clienteData);
    } catch (err) {
      console.error("ERRO DB [Cliente.create]:", err);
      throw new AppError("Erro ao cadastrar cliente", 500);
    }
  }

  /* ==========================
     READ
  ========================== */
  async findById(id) {
    if (!id) {
      throw new AppError("ID do cliente é obrigatório", 400);
    }

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      throw new AppError("Cliente não encontrado", 404);
    }

    return cliente;
  }

  async findAll() {
    return await Cliente.findAll();
  }

  /* ==========================
     UPDATE
  ========================== */
  async update(id, data) {
    if (!id) {
      throw new AppError("ID do cliente é obrigatório", 400);
    }

    const cliente = await this.findById(id);
    const clienteData = this._sanitizeUpdateData(data);

    try {
      await cliente.update(clienteData);
      return cliente;
    } catch (err) {
      console.error("ERRO DB [Cliente.update]:", err);
      throw new AppError("Erro ao atualizar cliente", 400);
    }
  }

  /* ==========================
     DELETE
  ========================== */
  async delete(id) {
    const cliente = await this.findById(id);

    try {
      await cliente.destroy();
      return { success: true };
    } catch (err) {
      console.error("ERRO DB [Cliente.destroy]:", err);
      throw new AppError("Erro ao excluir cliente", 400);
    }
  }

  /* ==========================
     HELPERS
  ========================== */

 async _sanitizeCreateData(data) {
    return {
      nome: data.nome?.trim(),
      cpf: data.cpf?.replace(/\D/g, ""),
      email: data.email?.toLowerCase().trim(),
      senha: await hashPassword(data.senha),
      telefone: data.telefone?.trim() || "",
      endereco: data.endereco || null,
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
      status: "ativo",
      filialId: data.filialId
    };
  }

  _sanitizeUpdateData(data) {
    const sanitized = {
      nome: data.nome?.trim(),
      telefone: data.telefone?.trim(),
      endereco: data.endereco,
      latitude: data.latitude,
      longitude: data.longitude,
      status: data.status
    };

    Object.keys(sanitized).forEach(
      key => sanitized[key] === undefined && delete sanitized[key]
    );

    return sanitized;
  }

  _validateCreate(data) {
    if (!data.nome) {
      throw new AppError("Nome do cliente é obrigatório", 400);
    }

    if (!data.cpf || data.cpf.length !== 11) {
      throw new AppError("CPF inválido", 400);
    }

    if (!data.email || !this._isValidEmail(data.email)) {
      throw new AppError("E-mail inválido", 400);
    }

    if (!data.senha || data.senha.length < 6) {
      throw new AppError("Senha deve ter no mínimo 6 caracteres", 400);
    }

    if (!data.filialId) {
      throw new AppError("Filial é obrigatória", 400);
    }
  }

  _isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

export default new ClienteService();
