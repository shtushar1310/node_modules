const express=require('express')
const routes=express.Router()
const menuItems=require('./../models/menu')

routes.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new menuItems(data)
        const values=await newMenu.save();
        console.log('successfully menu data save');
        res.status(200).json(values)
       }
       catch(err){
          console.log(err)
          res.status(500).json({error:"internal server error"})
       }
})

routes.get('/',async(req,res)=>{
    try{
        const data=await menuItems.find();
        console.log('fetech data successfully')
        res.status(200).json(data)
      }
      catch(err){
          console.log(err)
          res.status(500).json({error:'internal server error'})
      }
})
module.exports=routes