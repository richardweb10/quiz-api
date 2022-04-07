const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _question = null;

class QuestionRepository extends BaseRepository {
  constructor({ Question }) {
    super(Question);
    _question = Question;
  }

  async deleteByQuest (idQuest){
    try{
      const res = await _question.deleteMany({questionnaire: Types.ObjectId(idQuest)});
      
      return res;
    }catch(e){
      console.log("e: ", e);
    }
    
  }

  

}

module.exports = QuestionRepository;