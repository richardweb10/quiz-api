const { generateToken } = require("../helpers/jwt.helper");
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { email } = user;
    const userExist = await _userService.getUserByUsername(email);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "Actualmente existe un usuario con este correo electrónico. inicia sesión.";
      throw error;
    }

    if (user.name == null || user.name == "" ||
      user.email == null || user.email == "" ||
      user.password == null || user.password == "") {
      const error = new Error();
      error.status = 401;
      error.message = "Algunos de los campos se encuentra vacio";
      throw error;
    }

    const newUser = await _userService.create(user);

    const userToEncode = {
      username: newUser.email,
      id: newUser._id
    };

    const token = await generateToken(userToEncode);

    return { token, user: newUser };
  }

}

module.exports = AuthService;
