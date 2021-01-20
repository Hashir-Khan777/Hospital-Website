const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appointment = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  dob: {
    type: String,
    required: [true, "date of birth is required"],
  },
  mob: {
    type: Number,
    required: [true, "mobile number is required"],
  },
  sex: {
    type: String,
    required: [true, "sex is required"],
  },
  appointmentDate: {
    type: String,
    required: [true, "appointment date is required"],
  },
  depart: {
    type: String,
    required: [true, "department is required"],
  },
});

const BookedAppointment = mongoose.model("appointments", Appointment);

module.exports = BookedAppointment;
