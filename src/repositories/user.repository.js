const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUsername(username) {
    return await _user.findOne({ email: username });
  }

}

module.exports = UserRepository;
