const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: false,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("messages", MessageSchema);
