import mongoose, { mongo } from "mongoose";

const paymentDetail = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    addresh:{
        type:String,
        required: true,
    },
    city:{
        type :String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    zipcode:{
        type: Number,
        required: true
    }
})

const detailpayment = mongoose.model('detailpayment',paymentDetail)

export default detailpayment;