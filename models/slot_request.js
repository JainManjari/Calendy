const mongoose = require("mongoose");

const SlotRequestSchema = new mongoose.Schema(
  {
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host",
        required:true,
    },
    slot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Slot",
        required:true,
    },
    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participant",
        required:true,
    },
    status:{
        type: String,
        required:true,
    }
  },
  {
    timestamps: true,
  }
);

const SlotRequest = mongoose.model("SlotRequest", SlotRequestSchema);
module.exports = SlotRequest;
