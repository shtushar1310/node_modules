const express=require('express');
const routes=express.Router()
const Page=require('./../models/home')

routes.post('/home',async(req,res)=>{
    try{
           const data=req.body 
           const newPage=new Page(data)
           const response= await newPage.save()
           res.status(200).json(response)
    }
    catch(err){
        console.log(err)
         res.status(500).json({error:'internal sever error'})
    }

})
routes.get("/home",async(req,res)=>{
    try{
          const data= await Page.find();
          console.log('fetched successfully');
          res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=routes