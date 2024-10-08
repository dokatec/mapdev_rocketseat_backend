import { Router } from "express";
import axios from "axios";
import devmap from "./models/dev";

const routes = new Router();

routes.post("/devs", async (req, res) => {
  const { github_username } = req.body;

  const response = await axios.get(
    `https://api.github.com/users/${github_username}`
  );
});

export default routes;
