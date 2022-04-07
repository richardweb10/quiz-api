const { generateToken, checkingToken } = require("../helpers/jwt.helper");

let _questionnaireService = null;
class QuestionnaireController {
  constructor({ QuestionnaireService }) {
    _questionnaireService = QuestionnaireService;
  }

  async get(req, res) {
    const { questionnaireId } = req.params;
    const questionnaire = await _questionnaireService.get(questionnaireId);
    return res.send(questionnaire);
  }

  async getById(req, res) {
    const { questionnaireId } = req.params;
    const questionnaire = await _questionnaireService.getQuestionnaireByid(questionnaireId);
    return res.send(questionnaire.length >0?questionnaire[0]:{});
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const questionnaires = await _questionnaireService.getAll(pageSize, pageNum);
    return res.send(questionnaires);
  }


  async updateQuestionnaire(req, res) {
    const { body } = req;
    const { questionnaireId } = req.params;
    const updatedQuestionnaire = await _questionnaireService.updateQuestionnaire(questionnaireId, body);
    return res.json(updatedQuestionnaire);
  }

  async create(req, res){
    const { body } = req;
    const updatedQuestionnaire = await _questionnaireService.createQuestionnaire(body);
    return res.json(updatedQuestionnaire);
  }


  async delete(req, res) {
    const { questionnaireId } = req.params;
    const deletedQuestionnaire = await _questionnaireService.deleteQuestionnaire(questionnaireId);
    return res.send(deletedQuestionnaire);
  }


}

module.exports = QuestionnaireController;
