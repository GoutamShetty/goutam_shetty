const mongoose=require("mongoose")
const restaurant = require("./restaurant")

const orderSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },

    cart:{
        totalqty:{
            type:Number,
            default:0,
            required:true
        },
        totalcost:{
            type:Number,
            default:0,
            required:true
        },
        items:[
            {
                foodid:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Foods"
                },
                qty:{
                    type:Number,
                    default:0,
                },
                price:{
                    type:Number,
                    default:0,
                },
                foodname:{
                    type:String
                },
                restaurantname:{
                    type:String
                },
            },
        ],
    },
    address:{
        type:String,
        required:true
    },

    payment:{
        type:String,
        required:true
    },

    delivered:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('order',orderSchema)