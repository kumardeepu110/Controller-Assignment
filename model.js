const mongoose = require('mongoose')

const usermodel = mongoose.Schema({
    name:{type:String, default:''},
    email:{type:String, default:''},
    phone:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('user',usermodel)