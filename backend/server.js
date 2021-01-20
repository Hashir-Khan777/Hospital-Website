const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const expressAsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const DentistModel = require("./dentistModel.js");
const AdminModel = require("./adminModel.js");
const BookedAppointment = require("./appointmentModel.js");
const bodyParser = require("body-parser");
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: process.env.APIKEY,
  apiSecret: process.env.APISECRET,
});

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("open", () => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get(
  "/api/doctors",
  expressAsyncHandler(async (req, res) => {
    const dentists = await DentistModel.find({});
    res.send(dentists);
  })
);

app.get(
  "/api/doctors/:id",
  expressAsyncHandler(async (req, res) => {
    const dentist = await DentistModel.findById(req.params.id);
    if (dentist) {
      res.send(dentist);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
);

app.post(
  "/api/doctors/admin",
  expressAsyncHandler(async (req, res) => {
    const doctor = await AdminModel.findOne({ email: req.body.email });

    if (doctor) {
      if (doctor.isAdmin === true && doctor.password === req.body.password) {
        res.send({
          _id: doctor._id,
          name: doctor.name,
          email: doctor.email,
          isAdmin: doctor.isAdmin,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid user email or password" });
  })
);

app.post(
  "/api/appointment",
  expressAsyncHandler(async (req, res) => {
    const appointment = new BookedAppointment({
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      mob: req.body.num,
      sex: req.body.sex,
      appointmentDate: req.body.appointmentdate,
      depart: req.body.depart,
    });
    const newAppointment = await appointment.save();
    // const from = "Zia Dental";
    // const to = process.env.NUMBER;
    // const text = `${newAppointment.name} booked an appointment for ${
    //   newAppointment.depart
    // }, ${newAppointment.sex == "female" ? "her" : "his"} number is ${
    //   newAppointment.mob
    // }`;
    // nexmo.message.sendSms(from, to, text);
    res.send(newAppointment);
  })
);

app.get("/api/appointment", async (req, res) => {
  const booked = await BookedAppointment.find({});
  res.send(booked);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
