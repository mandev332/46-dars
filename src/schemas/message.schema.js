const { Schema, model, Types } = require("mongoose");

const MessageSchema = new Schema(
    {
        from: {
            type: Types.ObjectId,
            ref: "users",
            key: "_id",
        },
        to: {
            type: Types.ObjectId,
            ref: "users",
            key: "_id",
        },
        text: {
            type: String,
        },
    },
    {
        timestamps: {
            updatedAt: false,
        },
        versionKey: "__v",
    }
);

module.exports = model("messages", MessageSchema);
