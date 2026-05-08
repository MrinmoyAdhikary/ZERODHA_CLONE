const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const orderSchema=new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        index: true,
    },
    name: String,
    qty:Number,
    price: Number,
    mode:String
})

const orderModel=mongoose.model("order",orderSchema);

module.exports=orderModel;
