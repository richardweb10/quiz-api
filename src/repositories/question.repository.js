const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _question = null;

class QuestionRepository extends BaseRepository {
  constructor({ Question }) {
    super(Question);
    _question = Question;
  }

  

}

module.exports = QuestionRepository;