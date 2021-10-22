const mongoose=require("mongoose")

const categoriesSchema= new mongoose.Schema({
    catename:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("categories",categoriesSchema)