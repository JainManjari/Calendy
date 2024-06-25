const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
  {
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host",
        required:true,
    },
    timeStart: {
        type:Number,
        required: true
    },
    timeEnd: {
        type:Number,
        required: true
    },
    status:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);

const Slot = mongoose.model("Slot", SlotSchema);
module.exports = Slot;
