import FuncionarioService from "../services/funcionario.service.js";

export default {

  async getAll(req, res) {
    try {
      const funcionarios = await FuncionarioService.getAll();
      return res.json(funcionarios);
    } catch (error) {
      return res.status(500).json({
        error: "Erro ao listar funcionários"
      });
    }
  },

  async getById(req, res) {
    try {
      const funcionario = await FuncionarioService.getById(req.params.id);
      return res.json(funcionario);
    } catch (error) {
      return res.status(404).json({
        error: error.message
      });
    }
  },

  async create(req, res) {
    try {
      const funcionario = await FuncionarioService.create(req.body);
      return res.status(201).json(funcionario);
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  },

  async update(req, res) {
    try {
      const funcionario = await FuncionarioService.update(
        req.params.id,
        req.body
      );
      return res.json(funcionario);
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  },

  async delete(req, res) {
    try {
      await FuncionarioService.delete(req.params.id);
      return res.json({ success: true });
    } catch (error) {
      return res.status(404).json({
        error: error.message
      });
    }
  }

};
