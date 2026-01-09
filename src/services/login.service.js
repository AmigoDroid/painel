import bcrypt from "bcryptjs";
import { getToken } from "../utils/tokenProvider.js";
import db from "../models/index.js";
import { PERMISSION_GROUPS } from "../config/permissionGroups.js";
class LoginService {

  async login({ email, senha }) {
    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios");
    }

    const cliente = await db.Cliente.findOne({
      where: { email, status: "ativo" }
    });

    if (!cliente) {
      throw new Error("Usuário ou senha inválidos");
    }

    const senhaOk = await bcrypt.compare(senha, cliente.senha);
    if (!senhaOk) {
      throw new Error("Usuário ou senha inválidos");
    }

    const permissions = PERMISSION_GROUPS.AUTH_BASIC;

    const token = getToken({
      id: cliente.id,
      nome: cliente.nome,
      permissions,
      filialId: cliente.filialId
    });

    return {
      token,
      user: {
        id: cliente.id,
        nome: cliente.nome
      }
    };
  }
  async adminLogin({ email, senha }) {
    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios");
    }
    const funcionario = await db.Funcionario.findOne({
      where: { email, status: "ativo" }
    });
    if (!funcionario) {
      throw new Error("Usuário ou senha inválidos");
    }
    const senhaOk = await bcrypt.compare(senha, funcionario.senha);
    if (!senhaOk) {
      throw new Error("Usuário ou senha inválidos");
    }
    const permissions = await getPermissions(funcionario.id);
    const token = getToken({
      id: funcionario.id,
      nome: funcionario.nome,
      permissions,
      filialId: funcionario.filialId
    });
    return {
      token,
      user: {
        id: funcionario.id,
        nome: funcionario.nome
      }
    };
  }
  async getPermissions(funcionarioId) {
    const permissionsDB = await db.FuncionarioPermissao.findByPk(funcionarioId);
    if (permissionsDB) {
      return permissionsDB.permissoes;
    }
    return []; // Retorna um array vazio se nenhuma permissão for encontrada
  }
}

export default new LoginService(); 
