const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const OptionSchema = new Schema({
    value: { type: String, required: true },
    id: { type: Number, required: true},
    questionnaire: {
        type: ObjectId,
        ref: "Questionnaire",
      },
    question: {type: Number, required: true}
});


module.exports = mongoose.model("Option", OptionSchema);