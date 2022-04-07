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

    for(const question of data.questions){
        question['questionnaire'] = quest._id
        await _questionRepository.create(question);
    }
    for(const option of data.options){
        option['questionnaire'] = quest._id
        await _optionRepository.create(option);
    }

    return quest;
  }


}

module.exports = QuestionnaireService;
