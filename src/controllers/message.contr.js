const car = require("../models/message.model");
const { Types } = require("mongoose");
class CarContr {
    async get(req, res) {
        try {
            let { from, to } = req.query;

            return res.send({
                status: 200,
                data: await car.select({
                    to: new Types.ObjectId(to),
                    from: new Types.ObjectId(from),
                }),
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

module.exports = new CarContr();
