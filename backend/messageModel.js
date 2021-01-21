const mongoose = require("mongoose");
const Schem = mongoose.Schema;

const Message = new Schem({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

const MessageModel = mongoose.model("messages", Message);

module.exports = MessageModel;
