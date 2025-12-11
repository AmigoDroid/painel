import db from "../models/index.js";
const Filial = db.Filial;

export default {
    async getAll(req, res) {
        res.json(await Filial.findAll());
    },

    async getById(req, res) {
        const item = await Filial.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Filial não encontrada" });
    },

    async create(req, res) {
        res.json(await Filial.create(req.body));
    },

    async update(req, res) {
        await Filial.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Filial.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
