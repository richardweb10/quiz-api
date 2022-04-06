const mongoose = require("mongoose");
const { Schema } = mongoose;

const OptionSchema = new Schema({
    text: { type: String, required: true },
    correct: { 
        type: String, 
        enum: ["S", "N"],
        required: true },
    Question: {
        type: ObjectId,
        ref: "Question",
      },
});


module.exports = mongoose.model("Option", OptionSchema);