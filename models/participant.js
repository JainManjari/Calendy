const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;
