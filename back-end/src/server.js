import express from "express";
import { MongoClient, ReturnDocument, ServerApiVersion } from "mongodb";
const app = express();

const PORT = 8000;
app.use(express.json());
let db;
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

    // Connect to the MongoDB server
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
    const user = { name, email, number, message };
    const result = await db.collection("user").insertOne(user);
    if (result.acknowledged) {
      res.status(200).json({
        message: "Your details have been successfully saved.",
      });
    } else {
      res.status(500).json({
        message: "Faild to store your details. Try after some time",
      });
    }
  } catch (e) {
    console.error("Error inserting user:", e);
    res.status(500).json({
      message: "There seems to be some problem.Try after some time",
    });
  }
});
async function start() {
  try {
    await connectToDB(); // Ensure DB is connected before starting the server
    app.listen(PORT, function () {
      console.log("Server is listening on port " + PORT);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

start();
