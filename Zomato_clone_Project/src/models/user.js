const mongoose=require("mongoose");
// const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    username:{type:String,
        required:true,
    },
    emailid:{type:String,
        required:true,
        unique:true
    },
    password:{type:String,
        required:true,
    },
    confirmpassword:{type:String,
        required:true,
    }
})

module.exports = mongoose.model('users',userSchema)