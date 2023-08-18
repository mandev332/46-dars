const { Router } = require("express");
const mesContr = require("../controllers/message.contr");
const mesRoute = Router();
mesRoute.get("/", mesContr.get);

module.exports = mesRoute;
