const express=require("express");
const orderController=require("../Controller/orderController")

const Router=express.Router();

Router.route("/newOrder")
    .post(orderController.newOrder);
Router.route("/allOrders")
    .get(orderController.allOrders)

module.exports = Router;
