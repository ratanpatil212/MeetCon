const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true,
    },
    lname: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Number,
        required:true,
    },
    month:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },

    bestFriend:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:"User",
},
    hobbies:[String],
    address: {
        street: String,
        city: String,
    }
})

module.exports = mongoose.model("User", userSchema)
