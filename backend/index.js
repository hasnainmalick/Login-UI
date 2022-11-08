const express = require("express");
const User  =require("./models/userModel")

// authentication
const jwt  = require("jsonwebtoken")


//mongoDb
const mongoose = require("mongoose")
// cross site origin 
const cors = require('cors')
const app = express();

// database connection
const dbURL = "mongodb+srv://hasnain:Mal.008.@learningnode.qlyc9.mongodb.net/test"
async function db(){ 
try{
    const conn = await mongoose.connect(dbURL, 
        {useNewURLParser:true,
        useUnifiedTopology: true})
        console.log("MongoDB is Connnected")
}
catch(error){
    alert(`Error Occurred ${error.message}`)
    console.log(`Error Occurred ${error.message}`)
}
}
// calling database function
db();
app.use(cors())
app.use(express.json())
app.post('/', async(req,res) =>{
    console.log(req.body)
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        },
        
        )
        if(user){
            const token = jwt.sign({
                email:user.email,
                password:user.password
            },
            // here we provide secret key they should be in .env file and more secure
            'secret123'
            )
            return res.json({status: "ok", user :token})
        }
        else{
            return res.json({status: 'error', user :false})
        }
    
})

// registration route
app.post('/register', async(req,res)=>{
    // res.send("I am running");
    console.log(req.body)
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status: 'ok'})
    }
    catch(err){
        res.json({status:'error', error:'Duplication Email'})
    }
})
app.listen(3301,console.log("Server is listening on port 3301"))