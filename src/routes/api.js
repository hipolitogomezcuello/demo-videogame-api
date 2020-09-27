const express = require("express");
const Videogame = require("../model/Videogame");

const apiRouter = express.Router();

apiRouter.post("/videogames", async (req, res) => {
  await Videogame.create(req.body);
  res.status(201).send();
})

module.exports = apiRouter;
