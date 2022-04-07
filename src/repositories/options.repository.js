const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _option = null;

class OptionRepository extends BaseRepository {
  constructor({ Option }) {
    super(Option);
    _option = Option;
  }

  async deleteByQuest (idQuest){
    try{
      const res = await _option.deleteMany({questionnaire: Types.ObjectId(idQuest)});
      
      return res;
    }catch(e){
      console.log("e: ", e);
    }
    
  }

  

}

module.exports = OptionRepository;
