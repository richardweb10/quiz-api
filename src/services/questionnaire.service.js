const BaseService = require("./base.service");
let _questionnaireRepository = null;
let _questionRepository = null;
let _optionRepository = null;

class QuestionnaireService extends BaseService {
  constructor({ QuestionnaireRepository, QuestionRepository, OptionRepository  }) {
    super(QuestionnaireRepository);
    _questionnaireRepository = QuestionnaireRepository;
    _questionRepository = QuestionRepository;
    _optionRepository = OptionRepository
  }

  async createQuestionnaire (data) {
    const quest = await _questionnaireRepository.create({name: data.name, user: data.userId});
    await this.createOpQue(data,quest);
    return quest;
  }

  async getQuestionnaireByid (questionnaireId) {
    const quest = await _questionnaireRepository.getQuestionnaireByid(questionnaireId);
    return quest
  }

  async updateQuestionnaire (questionnaireId, data){
    const resul = await _questionnaireRepository.update(questionnaireId, {name: data.name, user: data.userId} );
    await _optionRepository.deleteByQuest(questionnaireId);
    await _questionRepository.deleteByQuest(questionnaireId);
    await this.createOpQue(data,resul);
    return resul;
  }

  async deleteQuestionnaire (questionnaireId, data){
    const resul = await _questionnaireRepository.delete(questionnaireId);
    await _optionRepository.deleteByQuest(questionnaireId);
    await _questionRepository.deleteByQuest(questionnaireId);
    return resul;

  }

  async createOpQue (data, quest) {
    for(const question of data.questions){
      question['questionnaire'] = quest._id
      await _questionRepository.create(question);
    }
    for(const option of data.options){
        option['questionnaire'] = quest._id
        await _optionRepository.create(option);
    }
  }
}

module.exports = QuestionnaireService;
