import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    p
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps: true});

export const Order = mongoose.model("Order", orderSchema);