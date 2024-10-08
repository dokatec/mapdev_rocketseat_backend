import mongoose from "mongoose";

const DevSchema = new mongoose({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
});

const devmap = mongoose.model("Dev", DevSchema);

export default devmap;
