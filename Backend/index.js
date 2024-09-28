import express from "express";
import dotenv, { parse } from "dotenv";
import cors from "cors";

import mongoose from "mongoose";
import bookRoute from "./Routes/book.route.js";
import userRoute from "./Routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3002;
const MONGODBURL = process.env.MONGODBURL;

try {
  mongoose.connect(MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db");
} catch (error) {
  console.log("error -", error);
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
