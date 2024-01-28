import express from 'express'
import dataBaseConnaction from './db.js';
import User  from './router/User.js'
import get  from './router/User.js'
import getId  from './router/User.js'
import dataRouter from './router/dataApi.js';
import dataRouterOne from './router/dataApi.js';
import paymentRouter from './router/payment.js';
import paymentRouterGet from './router/payment.js';
import paymentDetailSend from './router/paymentDetailSend.js';
import cors from 'cors'
const port = 5000;
const app =express()

app.use(cors())
app.use(express.json())

dataBaseConnaction()

//send data frontend to backend
app.use('/api/v1/post/',User)
app.use('/api/v1/post/',getId)
app.use('/api/v1/post/',get)

//send data backend to fronted
app.use('/dataApi',dataRouter)
app.use('/dataApi',dataRouterOne)


//payment recive msg
    app.use('/payment',paymentRouter);

    //paymentDetail 

app.use('/paydetail',paymentDetailSend)

//default router
app.get('/',(req, res)=>{
    res.send("hello server")
})


app.listen((port),()=>{
    console.log(`Server is running on port ${port}...`);
})