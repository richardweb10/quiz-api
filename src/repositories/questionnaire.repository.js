const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _questionnaire = null;

class QuestionnaireRepository extends BaseRepository {
  constructor({ Questionnaire }) {
    super(Questionnaire);
    _questionnaire = Questionnaire;
  }

  async getQuestionnaireByid (questionnaireId){
    const questionnaries = await _questionnaire.aggregate([
      { $match: { "_id": Types.ObjectId(questionnaireId) } },
      {
        $lookup: {
          from: 'questions',
          pipeline: [{
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$questionnaire", Types.ObjectId(questionnaireId)] }
                ]
              }
            }
          }],
          as: 'listQuestions'
        }
      },
      {
        $lookup: {
          from: 'options',
          let: { idUserPost: "$user" },
          pipeline: [{
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$questionnaire", Types.ObjectId(questionnaireId)] }
                ]
              }
            }
          }],
          as: 'listOptions'
        }
      }

    ])

    return questionnaries;
  }
 

}

module.exports = QuestionnaireRepository;