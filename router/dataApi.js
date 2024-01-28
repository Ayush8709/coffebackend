import expresss from 'express'
import data from '../data.js'
const dataRouter = expresss.Router()


dataRouter.get('/',(req, res)=>{
    res.json(data)
})

//send data with particulrar id

dataRouter.get('/:id',async (req, res)=>{
      const {id} = req.params;
      const findDAta= data.find(item => item.id === parseInt(id))
      if (findDAta){
        res.json(findDAta)
      }
      else{
        console.log('You not fetch and data');
      }
})



export default dataRouter