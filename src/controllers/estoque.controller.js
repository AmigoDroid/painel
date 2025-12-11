import db from "../models/index.js";
const Estoque = db.Estoque;

export default {
    async getAll(req, res) {
        res.json(await Estoque.findAll());
    },

    async getById(req, res) {
        const item = await Estoque.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Produto não encontrado" });
    },

    async create(req, res) {
        res.json(await Estoque.create(req.body));
    },

    async update(req, res) {
        await Estoque.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Estoque.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
