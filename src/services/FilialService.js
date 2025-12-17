import db from "../models/index.js";
import { AppError } from "../utils/AppErro.js"; // se não tiver, explico abaixo

const { Filial } = db;

class FilialService {

    /* ==========================
       CREATE
    ========================== */
    async create(data) {
        const filialData = this._sanitizeData(data);
        this._validateRequiredFields(filialData);

        try {
            return await Filial.create(filialData);
        } catch (err) {
            console.error("ERRO DB [Filial.create]:", err);
            throw new AppError("Não foi possível criar a filial", 400);
        }
    }

    /* ==========================
       READ
    ========================== */
    async findAll() {
        try {
            return await Filial.findAll();
        } catch (err) {
            console.error("ERRO DB [Filial.findAll]:", err);
            throw new AppError("Erro ao listar filiais", 500);
        }
    }

    async findById(id) {
        if (!id) {
            throw new AppError("ID da filial é obrigatório", 400);
        }

        const filial = await Filial.findByPk(id);

        if (!filial) {
            throw new AppError("Filial não encontrada", 404);
        }

        return filial;
    }

    /* ==========================
       UPDATE
    ========================== */
    async update(id, data) {
        if (!id) {
            throw new AppError("ID da filial é obrigatório", 400);
        }

        const filial = await this.findById(id);
        const filialData = this._sanitizeData(data, true);

        try {
            await filial.update(filialData);
            return filial;
        } catch (err) {
            console.error("ERRO DB [Filial.update]:", err);
            throw new AppError("Não foi possível atualizar a filial", 400);
        }
    }

    /* ==========================
       DELETE
    ========================== */
    async delete(id) {
        if (!id) {
            throw new AppError("ID da filial é obrigatório", 400);
        }

        const filial = await this.findById(id);

        try {
            await filial.destroy();
            return { success: true };
        } catch (err) {
            console.error("ERRO DB [Filial.destroy]:", err);
            throw new AppError("Não foi possível excluir a filial", 400);
        }
    }

    /* ==========================
       HELPERS (privados)
    ========================== */

    _sanitizeData(data, isUpdate = false) {
        const sanitized = {
            nome: data.nome?.trim(),
            endereco: data.endereco,
            telefone: data.telefone?.trim(),
            rate: data.rate,
            status: data.status
        };

        // Remove campos undefined (principalmente no update)
        if (isUpdate) {
            Object.keys(sanitized).forEach(
                key => sanitized[key] === undefined && delete sanitized[key]
            );
        }

        return sanitized;
    }

    _validateRequiredFields(data) {
        if (!data.nome) {
            throw new AppError("Nome da filial é obrigatório", 400);
        }

        if (!data.telefone) {
            throw new AppError("Telefone da filial é obrigatório", 400);
        }
    }
}

export default new FilialService();
