const express = require("express");
const authController = require("../Controller/authController");

const Router = express.Router();

Router.route("/check-number")
    .post(authController.checkNumber);

Router.route("/signup")
    .post(authController.signup);

Router.route("/login")
    .post(authController.login);

module.exports = Router;
