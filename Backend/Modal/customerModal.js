var mongoose = require('mongoose')
var customerSchema = mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        trim:true,
        lowwercase:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        lowercase:true
    },
    subject:{
        type:String,
        required: true,
        trim:true,
        lowercase:true
        
    },
    message:{
        type:String,
        required: true,
        trim:true,
        lowercase:true
     
    }
})

var customerModal = mongoose.model("Customer", customerSchema)
module.exports = customerModal