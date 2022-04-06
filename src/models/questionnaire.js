const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestSchema = new Schema({
    name: { type: String, required: true },
    user: {
        type: ObjectId,
        ref: "User",
      },
});


module.exports = mongoose.model("Questionnaire", QuestSchema);