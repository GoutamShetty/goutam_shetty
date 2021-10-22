const mongoose=require("mongoose")
const cartSchema=new mongoose.Schema({
    items:[
        {
            foodid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Foods"
            },
            qty:{
                type:Number,
                default:0
            },
            price:{
                type:Number,
                default:0
            },
            foodname:{
                type:String
            },
            restaurantname:{
                type:String
            }
        }
    ],
    totalQty:{
        type:Number,
        default:0,
        required:true,
    },
    totalCost:{
        type:Number,
        default:0,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        // required:false
    }
});

module.exports = mongoose.model("Cart",cartSchema)