import express from 'express'
import payment from '../models/payMentResive.js'
const paymentRouter = express.Router()


    paymentRouter.post('/',async (req, res)=>{
       const paymentDetail = new payment(req.body)
       paymentDetail.save()
       res.json(paymentDetail)

    })
   



export default paymentRouter;