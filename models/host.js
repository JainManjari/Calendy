const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema(
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

const Host = mongoose.model("Host", hostSchema);
module.exports = Host;
