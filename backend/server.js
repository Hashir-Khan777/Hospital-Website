const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
