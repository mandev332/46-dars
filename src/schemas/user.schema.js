const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "to'ldirilishi kerak"],
        },
        password: {
            type: String,
            match: /[a-zA-Z0-9]{4,12}/,
            required: [true, "to'ldirilishi kerak"],
        },
        avatar: {
            type: String,
            default: "/avatar/demo.jpg",
        },
    },
    {
        timestamps: {
            updatedAt: false,
        },
    }
);

module.exports = model("users", UserSchema);
