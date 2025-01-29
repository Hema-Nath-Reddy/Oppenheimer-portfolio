import express from "express";
import { MongoClient, ReturnDocument, ServerApiVersion } from "mongodb";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const app = express();

const PORT = 8000;
app.use(express.json());
let db;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function connectToDB() {
  const uri = "mongodb://127.0.0.1:27017";

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    console.log("Connected to the database");

    db = client.db("portfolio");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    const existingUser = await db.collection("users").findOne({
      $or: [{ name }, { email }, { number }],
    });

    if (existingUser) {
      if (existingUser.name === name) {
        return res.status(400).json({ message: "Name already exists", eid: 1 });
      }
      if (existingUser.email === email) {
        return res
          .status(400)
          .json({ message: "Email already exists", eid: 2 });
      }
      if (existingUser.number === number) {
        return res
          .status(400)
          .json({ message: "Phone number already exists", eid: 3 });
      }
    }

    const formattedDateTime = new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    const user = {
      name,
      email,
      number,
      message,
      submittedAt: formattedDateTime,
    };

    const result = await db.collection("users").insertOne(user);

    if (result.acknowledged) {
      return res.status(200).json({
        message: "Your details have been successfully saved.",
        eid: 9,
      });
    }
    res.status(500).json({
      message: "Failed to store your details. Try again later.",
      eid: 4,
    });
  } catch (e) {
    console.error("Error inserting user:", e);
    res.status(500).json({
      message: "There seems to be some problem. Try again later.",
      eid: 5,
    });
  }
});

async function start() {
  try {
    await connectToDB();
    app.listen(PORT, function () {
      console.log("Server is listening on port " + PORT);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

start();
