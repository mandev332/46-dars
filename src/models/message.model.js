const message_model = require("../schemas/message.schema");
const { Types } = require("mongoose");
class messageModel {
  async select(filter = {}) {
    console.log(filter);
    if (Object.keys(filter).length == 2) {
      const { from, to } = filter;

      return await message_model
        .find({
          $or: [
            { to, from },
            { from: to, to: from },
          ],
        })
        .populate("from")
        .populate("to");
    }
  }

  async insert(body) {
    return await message_model.create(body);
  }
}

// mes.insert([
//     {
//         from: new Types.ObjectId("6431430ffe5b40ecbeca1f3e"),
//         to: new Types.ObjectId("64314a9b9a16ae1a0e5abfae"),
//         text: "salom",
//     },
//     {
//         from: new Types.ObjectId("64314a9b9a16ae1a0e5abfae"),
//         to: new Types.ObjectId("6431430ffe5b40ecbeca1f3e"),
//         text: "valekum salom",
//     },
//     {
//         from: new Types.ObjectId("64314a9b9a16ae1a0e5abfae"),
//         to: new Types.ObjectId("6431430ffe5b40ecbeca1f3e"),
//         text: "yaxhimisiz",
//     },
//     {
//         from: new Types.ObjectId("6431430ffe5b40ecbeca1f3e"),
//         to: new Types.ObjectId("64314a9b9a16ae1a0e5abfae"),
//         text: "rahmat",
//     },
// ]);

module.exports = new messageModel();
