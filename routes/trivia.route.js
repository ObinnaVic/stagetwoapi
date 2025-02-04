const express = require("express");
const controller = require("../controller/trivia.controller");
const routes = express.Router();

routes.route("/classify-number").get(controller.triviaController);

module.exports = routes;