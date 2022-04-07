const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const QuesttionSchema = new Schema({
    value: { type: String, required: true },
    questionnaire: {
        type: ObjectId,
        ref: "Questionnaire",
      },
    correct: { type: Number, required: true },
    id: { type: Number, required: true },
});


module.exports = mongoose.model("Question", QuesttionSchema);