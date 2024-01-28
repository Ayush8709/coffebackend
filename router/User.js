import express from "express";
import User from "../models/userDetails.js";

const router = express.Router()


router.post('/',async (req, res)=>{
   try {
    const data = new User(req.body)
    await data.save()
    res.send(data)
   } catch (error) {
    console.log('Please Enter valid Field');
   }
})


router.get('/',async(req, res)=>{
       const fetchData = await User.find()
       res.json(fetchData)
})

router.get('/:id',async(req, res)=>{
        const singleData = await User.findById(req.params.id);
        res.json(singleData)
})

export default router;



