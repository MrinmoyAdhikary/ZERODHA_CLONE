require("dotenv").config()

const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors")
const passport = require("passport");

const mongoose=require("mongoose");
const holdingRoute = require("./Routes/holdingRoute");
const positionRoute = require("./Routes/positionRoute")
const orderRoute = require("./Routes/orderRoute")
const authRoute = require("./Routes/authRoute")
require("./config/passport")(passport);


const PORT=process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Databse Connected!'))
  .catch((error) => console.log("Database connection failed:", error.message));

  app.use(bodyParser.json());
  app.use(cors());
  app.use(passport.initialize());

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/allHoldings", holdingRoute);
app.use("/allPositions",positionRoute);
app.use("/order",orderRoute);
app.use("/auth", authRoute);

app.listen(PORT,()=>{
    console.log("App started");
});
