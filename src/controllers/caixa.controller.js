import db from "../models/index.js";
const Caixa = db.Caixa;

export default {
    async getAll(req, res) {
        res.json(await Caixa.findAll());
    },

    async getById(req, res) {
        const item = await Caixa.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Caixa não encontrado" });
    },

    async create(req, res) {
        res.json(await Caixa.create(req.body));
    },

    async update(req, res) {
        await Caixa.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Caixa.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
