import PermissaoService from "../services/permissao.service.js";

export default {

  async create(req, res, next) {
    try {
      const result = await PermissaoService.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  async getAll(req, res, next) {
    try {
      const result = await PermissaoService.findAll();
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async getByFuncionario(req, res, next) {
    try {
      const result = await PermissaoService.findByFuncionario(
        req.params.funcionarioId
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await PermissaoService.update(
        req.params.funcionarioId,
        req.body.permission
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      const result = await PermissaoService.delete(req.params.funcionarioId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};
