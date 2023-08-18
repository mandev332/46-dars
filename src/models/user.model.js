const user_model = require("../schemas/user.schema");
const mesModel = require("../schemas/message.schema");
class userModel {
    async select(id, filter = {}) {
        if (id) return await user_model.findById(id);
        return await user_model.find();
    }
    async insert(body) {
        return await user_model.create(body);
    }
}

module.exports = new userModel();
