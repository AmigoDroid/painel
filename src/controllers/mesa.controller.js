import db from "../models/index.js";
const Mesa = db.Mesa;

export default {
    async getAll(req, res) {
        res.json(await Mesa.findAll());
    },

    async getById(req, res) {
        const item = await Mesa.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Mesa não encontrada" });
    },

    async create(req, res) {
        res.json(await Mesa.create(req.body));
    },

    async update(req, res) {
        await Mesa.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Mesa.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
