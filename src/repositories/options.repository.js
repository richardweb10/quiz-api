const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _option = null;

class OptionRepository extends BaseRepository {
  constructor({ Option }) {
    super(Option);
    _option = Option;
  }

  

}

module.exports = OptionRepository;
