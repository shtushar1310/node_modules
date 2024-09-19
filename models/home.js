const mongoose=require('mongoose');
const { Schema } = require('mongoose');
const homeSchema=new mongoose.Schema({
    home:{
        type:String,
        required:true
    },
    page:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
})
const Page=mongoose.model("Page",homeSchema)
module.exports=Page