const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://nodir:mongodb@cluster0.rlpgj0d.mongodb.net/chat")
  .then(console.log("connection"))
  .catch((er) => console.log(er.message));
