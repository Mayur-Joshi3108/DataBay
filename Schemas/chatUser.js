const mongoose = require("mongoose");

const chatUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: true,
    },
    avatarImage: {
        type: String,
        default: "",
    },
});

module.exports = chatUserSchema;