import LoginService from "../services/login.service.js";

class LoginController {
  async login(req, res) {
    try {
      const result = await LoginService.login(req.body);
      return res.json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new LoginController();
