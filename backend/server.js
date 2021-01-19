const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const DentistModel = require("./dentistModel.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

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

app.get("/api/doctors", async (req, res) => {
  const dentists = await DentistModel.find({});
  res.send(dentists);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
