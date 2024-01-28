import express from 'express'
const paymentDetailSend = express.Router()
import paymentDetail from '../models/paymentDetail.js'

paymentDetailSend.post('/',(req, res)=>{
    const detail = new paymentDetail(req.body)
    detail.save()
    res.json(detail)
})

export default paymentDetailSend