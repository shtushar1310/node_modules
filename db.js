const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels'
//to connect
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected successfully');
    
})
db.on('error',()=>{
    console.log('connected unsuccessfully');
    
})
module.exports=db