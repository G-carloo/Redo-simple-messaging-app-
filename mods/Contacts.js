const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.Schema("Contact", ContactSchema);
