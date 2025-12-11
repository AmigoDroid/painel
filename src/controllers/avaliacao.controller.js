import db from "../models/index.js";
const Avaliacao = db.Avaliacao;

export default {
    async getAll(req, res) {
        res.json(await Avaliacao.findAll());
    },

    async getById(req, res) {
        const item = await Avaliacao.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Avaliação não encontrada" });
    },

    async create(req, res) {
        res.json(await Avaliacao.create(req.body));
    },

    async update(req, res) {
        await Avaliacao.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Avaliacao.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
