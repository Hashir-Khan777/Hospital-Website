const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dentist = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  education: {
    type: Array,
    required: [true, "education is required"],
  },
  experience: {
    type: String,
    required: [true, "experience is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  wait: {
    type: String,
    required: [true, "wait time is required"],
  },
  services: {
    type: Array,
    required: [true, "services are required"],
  },
  checkup: {
    type: Number,
    required: [true, "doctor checkup is required"],
  },
  staff: {
    type: Number,
    required: [true, "staff behaviour is required"],
  },
  clinic: {
    type: Number,
    required: [true, "clinic environment is required"],
  },
  fees: {
    type: Number,
    required: [true, "checkup fees is required"],
  },
  about: {
    type: String,
    required: [true, "about is required"],
  },
  mondaysaturday: {
    type: String,
    required: [true, "working hours is required"],
  },
  sunday: {
    type: String,
    required: [true, "working hours is required"],
  },
  condition: {
    type: Array,
    required: [true, "condition treated are required"],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const DentistModel = mongoose.model("doctors", Dentist);

module.exports = DentistModel;
