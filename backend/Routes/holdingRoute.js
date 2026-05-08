const express=require("express");
const holdingController=require("../Controller/holdingController")

const Router=express.Router();

Router.route("/")
    .get(holdingController.showHoldings)

module.exports = Router;

