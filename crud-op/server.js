const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

//For the Database connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

//Defining MongoDB Schema & model

const ItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: Number,
});

ItemSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.__v;
  },
});

const Item = mongoose.model("Item", ItemSchema);

app.post("/api/items", async (req, res) => {
  try {
    const { id, name, price } = req.body;
    const newItem = new Item({ id, name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Read (GET ALL)
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find({}, { __v: 0 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//READ (GET one by 'id')
app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findOne({ id: req.params.id }, { __v: 0 });
    if (item.lenght === 0)
      return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Update (PUT by 'id')
app.put("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      projection: { __v: 0 },
    });
    if (!updateItem) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Delete (DELETE by 'id')
app.delete("/api/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findMany({ id: req.params.id });
    if (deletedItem.lenght === 0)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
