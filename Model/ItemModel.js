const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const items=mongoose.model("items",itemSchema)
module.exports=items