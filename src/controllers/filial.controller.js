import FilialService from "../services/Filial.service.js";

export default {

    async getAll(req, res) {
        try {
            const filiais = await FilialService.findAll();
            res.json(filiais);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const filial = await FilialService.findById(req.params.id);
            res.json(filial);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const filial = await FilialService.create(req.body);
            res.status(201).json(filial);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const filial = await FilialService.update(req.params.id, req.body);
            res.json(filial);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            await FilialService.delete(req.params.id);
            res.json({ success: true });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

};
 