const mongoose=require("mongoose")

const restaurantSchema=new mongoose.Schema({
    restaurantname:{
        type:String,
        required:true
    },
    restaurantlocation:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('restaurant',restaurantSchema)