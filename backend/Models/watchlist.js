const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const watchlistSchema=new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

const watchlistModel=mongoose.model("watchlist",watchlistSchema);

module.exports=watchlistModel;