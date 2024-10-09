import mongoose, { Schema } from "mongoose";
import PointSchema from "../utils/PointSchema.js";

const DevSchema = new Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

const devmap = mongoose.model("Dev", DevSchema);

export default devmap;
