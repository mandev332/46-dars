const { Router } = require("express");
const userContr = require("../controllers/user.contr");
const userRoute = Router();
userRoute
    .get("/", userContr.get)
    .get("/:_id", userContr.get)
    .post("/", userContr.post);

module.exports = userRoute;
