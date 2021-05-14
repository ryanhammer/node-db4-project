const express = require("express");

const server = express();

server.use(express.json());

const recipesRouter = require('./recipes/recipes-router');

server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Someone Check On Ryan, He's Drowning Under All This Backend</h2>`);
});

module.exports = server