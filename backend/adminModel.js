const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema;

const Admin = new AdminSchema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  isAdmin: {
    type: Boolean,
    required: [true, "admin is required"],
    default: true,
  },
});

const AdminModel = mongoose.model("admin", Admin);

module.exports = AdminModel;
