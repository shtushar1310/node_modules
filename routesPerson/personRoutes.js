const express=require('express')
const routes=express.Router()
const Person=require('./../models/person')
 //POST route to add person
 //to save data to database
 routes.post('/',async(req,res)=>{
    try{
        const data=req.body // assuming the request body contain person data
    
        //create the new person to the databases
        const newPerson=new Person(data)
    
        //saving the data of new person in the database
         const response=await newPerson.save();
         console.log('data saved')
         res.status(200).json(response)
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
      }
 })


 //how to fetech data
 routes.get('/',async(req,res)=>{
    try{
      const data=await Person.find();
      console.log('feteched data')
      res.status(200).json(data)
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
    }
  })



//save data on bases of parame
 routes.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType //extract the work form URL parameter
      if(workType==='chef' || workType==='waiter' || workType==="manager"){
         const response= await Person.find({work:workType})
         console.log('data fetched succussfully')
         res.status(200).json(response)
      }
      else{
        res.status(404).json({error:"invalid workType"})
      }
      
    }
    catch(err){
      console.log(err)
         res.status(500).json({error:'internal server error'})
    }
  })



  //for the updation of the items in databases using mongoDB and node js


  routes.put('/:id',async(req,res)=>{
    try{
         const personId=req.params.id; // Extract the id form the URL parameter
         const updatePersonId=req.body;
         const response=await Person.findByIdAndUpdate(personId,updatePersonId,{
          new:true,//return the update value
          runValidators:true //run mongoose validator
         })
         if(!response){
          return res.status(404).json({error:'invalid user name'})
         }
         console.log('data updated');
         res.status(200).json(response)
         


    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'internal server error'})

    }
  })

  //delete method in data
  routes.delete('/:id',async(req,res)=>{
    try{
      const personId=req.params.id;
      const response=await Person.findByIdAndDelete(personId)
      res.status(200).json(response)
    }
    catch(err){
       console.log(err)
       res.status(500).json({error:"invalid ID not found"})
    }
  })













  module.exports=routes;