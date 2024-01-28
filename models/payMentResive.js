import mongoose from 'mongoose'

const payMentSchema = mongoose.Schema({
    cardholder: {
        type: String,
        required: true,
    },
    cardnumber: {
        type: Number,
        required: true,
    },
    expmonth:{
        type:Number,
        required: true,
    },
    expyear:{
        type :Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const payment = mongoose.model('payment', payMentSchema)

export default payment;