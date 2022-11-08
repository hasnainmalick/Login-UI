const mongoose = require("mongoose");

// define schema of data base
const User =  mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},
// add mongodbAtlas collection name
{collection:'UserLoginData'})

// model name can be any and pass schema
const model = mongoose.model('UserData',User)
module.exports = model