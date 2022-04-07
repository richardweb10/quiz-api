const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _questionnaire = null;

class QuestionnaireRepository extends BaseRepository {
  constructor({ Questionnaire }) {
    super(Questionnaire);
    _questionnaire = Questionnaire;
  }

  

}

module.exports = QuestionnaireRepository;