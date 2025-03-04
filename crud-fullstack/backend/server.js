const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const ItemModel = mongoose.model("Item", ItemSchema);

// CREATE
app.post("/items", async (req, res) => {
  const { name, description } = req.body;
  const newItem = new ItemModel({ name, description });
  await newItem.save();
  res.json(newItem);
});

// READ
app.get("/items", async (req, res) => {
  const items = await ItemModel.find();
  res.json(items);
});

// UPDATE
app.put("/items/:id", async (req, res) => {
  const { name, description } = req.body;
  const updatedItem = await ItemModel.findByIdAndUpdate(
    req.params.id,
    { name, description },
    { new: true }
  );
  res.json(updatedItem);
});

// DELETE
app.delete("/items/:id", async (req, res) => {
  await ItemModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted successfully" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
