const mongoose=require('mongoose');
const menuSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
       enum:['sweet','sour',"spicy"],
       required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    number:{
        type:Number,
        default:0
    }

})
const menuItems=mongoose.model('menuItems',menuSchema)
module.exports=menuItems;