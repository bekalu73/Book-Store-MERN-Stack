import express from "express";
import { PORT } from "./config.js";
const app = express();

app.get("/", (req, res) => {
  console.log("this is home page");
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});
