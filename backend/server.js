const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const expressAsyncHandler = require("express-async-handler");
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
