const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");

const MessageSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaType,
    ref: "users",
  },
  message: {
    type: String,
  },
  time: {
    type: Timestamp,
    default: Timestamp.time,
  },
});

mongoose.model("messages", MessageSchema);
