const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QRCode = require("qrcode");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

//For the Database connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

const QrSchema = new mongoose.Schema({
  link: String,
  qrImage: String,
});

const QrModel = mongoose.model("QrModel", QrSchema);

app.post("/generate", async (req, res) => {
  const { link } = req.body;
  const qrImage = await QRCode.toDataURL(link);
  const qrEntry = new QrModel({ link, qrImage });
  await qrEntry.save();
  res.json({ qrEntry });
});

app.get("/history", async (req, res) => {
  const history = await QrModel.find();
  res.json(history);
});

app.listen(5000, () => console.log("Server is running on port 5000"));
