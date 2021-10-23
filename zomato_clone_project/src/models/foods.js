const mongoose=require("mongoose");
const categories = require("./categories");
const restaurant = require("./restaurant");

const foodSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    availability:{
        type:Boolean,
        default:true
    },
    foodimage:{
        type:String,
        required:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurant"

    },
    rating:{
        type:String,
        required:true
    },

    categories:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    }
})

module.exports = mongoose.model('Foods',foodSchema)