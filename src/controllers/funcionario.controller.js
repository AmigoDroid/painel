import db from "../models/index.js";
const Funcionario = db.Funcionario;

export default {
    async getAll(req, res) {
        res.json(await Funcionario.findAll());
    },

    async getById(req, res) {
        const item = await Funcionario.findByPk(req.params.id);
        item ? res.json(item) : res.status(404).json({ error: "Funcionário não encontrado" });
    },

    async create(req, res) {
        res.json(await Funcionario.create(req.body));
    },

    async update(req, res) {
        await Funcionario.update(req.body, { where: { id: req.params.id }});
        res.json({ success: true });
    },

    async delete(req, res) {
        await Funcionario.destroy({ where: { id: req.params.id }});
        res.json({ success: true });
    },
};
