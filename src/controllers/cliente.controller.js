import db from "../models/index.js";
const Cliente = db.Cliente;

export default {
    async getAll(req, res) {
        res.json(await Cliente.findAll());
    },

    async getById(req, res) {
        const item = await Cliente.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Cliente não encontrado" });
    },

    async create(req, res) {
        res.json(await Cliente.create(req.body));
    },

    async update(req, res) {
        await Cliente.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Cliente.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
