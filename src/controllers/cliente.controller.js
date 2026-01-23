import ClienteService from "../services/cliente.service.js";

export default {
  async getAll(req, res, next) {
    try {
      const clientes = await ClienteService.findAll();
      res.json(clientes);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const cliente = await ClienteService.findById(req.params.id);
      res.json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const cliente = await ClienteService.create(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const cliente = await ClienteService.update(req.params.id, req.body);
      res.json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      await ClienteService.delete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }
};
