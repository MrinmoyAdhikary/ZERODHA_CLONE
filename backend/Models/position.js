const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const positionSchema=new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        index: true,
    },
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const positionModel=mongoose.model("position",positionSchema);
module.exports=positionModel;
