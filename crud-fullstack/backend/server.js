const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("connected"))
  .catch((e) => console.log("Error", e));

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const ItemModel = mongoose.model("Item", ItemSchema);

app.post("/api/item", async (req, res) => {
  const { name, description } = req.body;
  const newItem = new ItemModel({ name, description });
  await newItem.save();
  res.json(newItem);
});

app.get("/api/items", async (req, res) => {
  const items = await ItemModel.find();
  res.json(items);
});

app.put("/api/items:id", async (req, res) => {
  const { name, description } = req.body;
  const updatedItem = await ItemModel.findByIdAndUpdate(
    req.params.id,
    { name, description },
    { new: true }
  );
  res.json(updatedItem);
});

app.delete("/api/items:id", async (req, res) => {
  const deletedItem = await ItemModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
