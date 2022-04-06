const { generateToken } = require('../helpers/jwt.helper');

let _authService = null;

class AuthController {
  constructor({ AuthService  }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createdUser = await _authService.signUp(body);
    delete createdUser.password;
    return res.status(201).json(createdUser);
  }
}

module.exports = AuthController;
