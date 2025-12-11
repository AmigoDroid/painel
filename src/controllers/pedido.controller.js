import db from "../models/index.js";
const Pedido = db.Pedido;

export default {
    async getAll(req, res) {
        res.json(await Pedido.findAll());
    },

    async getById(req, res) {
        const item = await Pedido.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Pedido não encontrado" });
    },

    async create(req, res) {
        res.json(await Pedido.create(req.body));
    },

    async update(req, res) {
        await Pedido.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Pedido.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
