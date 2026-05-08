const express=require("express");
const Router=express.Router();
const positionController=require("../Controller/positionController")

Router.route("/")
    .get(positionController.showPositions);

module.exports = Router;
