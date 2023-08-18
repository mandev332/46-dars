const express = require("express");
const config = require("config");
const ejs = require("ejs");
const messagesRouter = require("./routers/car.routes");
const userRoute = require("./routers/user.routes");
require("./db/mongo");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.get("/", (req, res) => res.render("index"));
app.use("/messages", messagesRouter);
app.use("/users", userRoute);
app.listen(PORT);
console.log("server run " + PORT);
