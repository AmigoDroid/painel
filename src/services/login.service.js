import bcrypt from "bcryptjs";
import { getToken } from "../utils/tokenProvider.js";
import db from "../models/index.js";
class LoginService {

  async login({ email, senha }) {
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

    // 🔐 Exemplo: permissões vindas do banco ou por cargo
    const permissions = await this.getPermissions(funcionario);

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
        nome: funcionario.nome,
        cargo: funcionario.cargo,
        filialId: funcionario.filialId
      }
    };
  }

  async getPermissions(funcionario) {
    // por enquanto, simples
    if (funcionario.cargo === "Gerente") {
      return [99]; // ADMIN
    }

    return [];
  }
}

export default new LoginService();
