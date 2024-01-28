import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
        name: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true,
                index: true,
                unique: true,
        },
        phone: {
                type: Number,
               
                required: true
        },
        addresh: {
                type: String,
                required: true
        },
        total: {
                type: Number,
               
                required: true,
        },
},{ timestamps: true })

const User = mongoose.model('User', userSchema)

export default User;