
const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const holdingSChema=new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        index: true,
    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

const holdingModel=mongoose.model("holding",holdingSChema);

module.exports=holdingModel;
