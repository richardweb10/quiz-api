const { generateToken, checkingToken } = require("../helpers/jwt.helper");

let _userService = null;
class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userService.get(userId);
    return res.send(user);
  }

  async getById(req, res) {
    const { userId } = req.params;
    const type = req.query.hasOwnProperty('type')?req.query.type: '';
    const user = await _userService.getUserByid(userId, type);
    return res.send(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const users = await _userService.getAll(pageSize, pageNum);
    return res.send(users);
  }


  async updateUser(req, res) {
    const { body } = req;
    const { userId } = req.params;

    const updatedUser = await _userService.updateUser(userId, body);
    return res.json(updatedUser);
  }


  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _userService.delete(userId);
    return res.send(deletedUser);
  }


}

module.exports = UserController;
