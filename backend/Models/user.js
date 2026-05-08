const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    passwordSalt: {
        type: String,
        required: true,
    },
});

userSchema.methods.setPassword = function (password) {
    this.passwordSalt = crypto.randomBytes(16).toString("hex");
    this.passwordHash = crypto
        .pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512")
        .toString("hex");
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512")
        .toString("hex");

    return this.passwordHash === hash;
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
