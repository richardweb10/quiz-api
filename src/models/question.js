const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuesttionSchema = new Schema({
    text: { type: String, required: true },
    Questionnaire: {
        type: ObjectId,
        ref: "Questionnaire",
      },
});


module.exports = mongoose.model("Question", QuesttionSchema);