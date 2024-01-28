import mongoose from "mongoose";
// const URL = `mongodb://localhost:27017/cofeeShop `;
const URL = `mongodb+srv://ayushsingh0455:ayushsingh0455@coffeshop.mqbqevl.mongodb.net/?retryWrites=true&w=majority `;


const dataBaseConnaction = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log(`DataBase Connacted`);
    } catch (error) {
            console.log(`Not Connacted`);
    }
}

export default dataBaseConnaction;