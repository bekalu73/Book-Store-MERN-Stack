import express from "express";
// import { PORT, MONGODB_URI } from "./config.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database Connected");
  } catch (err) {
    console.log("database Connection Error", err);
  }
};

app.get("/", (req, res) => {
  console.log("this is home page");
  res.send("home");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on http://localhost:${process.env.PORT}`);
  DBConnection();
});
