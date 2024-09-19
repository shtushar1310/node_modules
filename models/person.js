const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:false
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        
    },
    mobile:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});
// create person models
const Persons=mongoose.model('Persons',personSchema);
module.exports=Persons;