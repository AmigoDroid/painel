import db from "../models/index.js";
const Cardapio = db.Cardapio;

export default {
    async getAll(req, res) {
        res.json(await Cardapio.findAll());
    },

    async getById(req, res) {
        const item = await Cardapio.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Item não encontrado" });
    },

    async create(req, res) {
        res.json(await Cardapio.create(req.body));
    },

    async update(req, res) {
        await Cardapio.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Cardapio.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
