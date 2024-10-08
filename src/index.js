import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Dev");
};

main().catch((error) => console.error(error));

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("HTTP is running...");
});
