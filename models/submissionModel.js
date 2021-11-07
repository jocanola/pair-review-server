const mongoose = require("mongoose");

const studentSubmissions = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  sessionLink: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    default: "",
  },
  score: {
    type: String,
    default: "",
  },
  reviewerId: {
    type: String,
    default: "",
  },
  reviewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("submissions", studentSubmissions);
