const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://galaxygamerman:XeZQiXo1foS3iUwX@cluster0.szm8aoh.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("pixillionuser", newSchema)

module.exports=collection
