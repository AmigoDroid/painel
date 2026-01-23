import db from "../models/index.js";
import { AppError } from "../utils/AppErro.js";

const { FuncionarioPermissao, Funcionario } = db;

class PermissaoService {

  async create(data) {
    const { funcionarioId, permission } = data;

    if (!funcionarioId) {
      throw new AppError("Funcionário é obrigatório", 400);
    }

    if (!Array.isArray(permission) || permission.length === 0) {
      throw new AppError("Permissões inválidas", 400);
    }

    // 🔎 Verifica se funcionário existe
    const funcionario = await Funcionario.findByPk(funcionarioId);
    if (!funcionario) {
      throw new AppError("Funcionário não encontrado", 404);
    }

    // 🔎 Impede duplicidade
    const existente = await FuncionarioPermissao.findOne({
      where: { funcionarioId }
    });

    if (existente) {
      throw new AppError("Este funcionário já possui permissões cadastradas", 400);
    }

    try {
      return await FuncionarioPermissao.create({
        funcionarioId,
        permission
      });
    } catch (err) {
      console.error("ERRO DB [Permissao.create]:", err);
      throw new AppError("Erro ao cadastrar permissões", 500);
    }
  }

  async findAll() {
    return await FuncionarioPermissao.findAll();
  }

  async findByFuncionario(funcionarioId) {
    if (!funcionarioId) {
      throw new AppError("Funcionário é obrigatório", 400);
    }

    const permissao = await FuncionarioPermissao.findOne({
      where: { funcionarioId }
    });

    if (!permissao) {
      throw new AppError("Permissões não encontradas", 404);
    }

    return permissao;
  }

  async update(funcionarioId, permission) {
    if (!Array.isArray(permission) || permission.length === 0) {
      throw new AppError("Permissões inválidas", 400);
    }

    const permissao = await this.findByFuncionario(funcionarioId);

    try {
      await permissao.update({ permission });
      return permissao;
    } catch (err) {
      console.error("ERRO DB [Permissao.update]:", err);
      throw new AppError("Erro ao atualizar permissões", 500);
    }
  }

  async delete(funcionarioId) {
    const permissao = await this.findByFuncionario(funcionarioId);

    try {
      await permissao.destroy();
      return { success: true };
    } catch (err) {
      console.error("ERRO DB [Permissao.delete]:", err);
      throw new AppError("Erro ao remover permissões", 500);
    }
  }
}

export default new PermissaoService();
