import db from "../models/index.js";

const { Filial } = db;

class FilialService {

    /* ==========================
       CREATE
    ========================== */
    async create(data) {
        const filialData = this._sanitizeData(data);
        this._validateRequiredFields(filialData);

        const filial = await Filial.create(filialData);
        return filial;
    }

    /* ==========================
       READ
    ========================== */
    async findAll() {
        return await Filial.findAll();
    }

    async findById(id) {
        if (!id) throw new Error("ID da filial é obrigatório");

        const filial = await Filial.findByPk(id);
        if (!filial) throw new Error("Filial não encontrada");

        return filial;
    }

    /* ==========================
       UPDATE
    ========================== */
    async update(id, data) {
        if (!id) throw new Error("ID da filial é obrigatório");

        const filial = await this.findById(id);
        const filialData = this._sanitizeData(data);

        await filial.update(filialData);
        return filial;
    }

    /* ==========================
       DELETE
    ========================== */
    async delete(id) {
        if (!id) throw new Error("ID da filial é obrigatório");

        const filial = await this.findById(id);
        await filial.destroy();

        return { success: true };
    }

    /* ==========================
       HELPERS (privados)
    ========================== */

    _sanitizeData(data) {
        return {
            nome: data.nome?.trim(),
            endereco: data.endereco ?? {},
            telefone: data.telefone?.trim(),
            rate: data.rate ?? null,
            status: data.status ?? true
        };
    }

    _validateRequiredFields(data) {
        if (!data.nome) {
            throw new Error("Nome da filial é obrigatório");
        }

        if (!data.telefone) {
            throw new Error("Telefone da filial é obrigatório");
        }
    }
}

export default new FilialService();
