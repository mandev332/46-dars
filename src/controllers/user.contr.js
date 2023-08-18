const user = require("../models/user.model");

class userContr {
    async get(req, res) {
        try {
            const _id = req.params?._id;
            if (_id)
                return res.send({
                    status: 200,
                    data: await user.select(_id),
                });

            return res.send({
                status: 200,
                data: await user.select(),
            });
        } catch (er) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: er.message,
            });
        }
    }

    async post(req, res) {
        try {
            const { model, price } = req.body;
            if (!price || !model) throw new Error("Ma'lumot to'liq jo'nat");
            res.send({
                status: 201,
                data: await user.insert({ model, price }),
            });
        } catch (er) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: er.message,
            });
        }
    }
}

module.exports = new userContr();
