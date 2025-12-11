import db from "../models/index.js";
const Entrega = db.Entrega;

export default {
    async getAll(req, res) {
        res.json(await Entrega.findAll());
    },

    async getById(req, res) {
        const item = await Entrega.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Entrega não encontrada" });
    },

    async create(req, res) {
        res.json(await Entrega.create(req.body));
    },

    async update(req, res) {
        await Entrega.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Entrega.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
