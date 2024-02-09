const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

port=4000
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is the home page")
})



mongoose.connect("mongodb://127.0.0.1:27017/mernLogin")
.then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err)
})

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const user= mongoose.model("user",userschema)

app.post('/signup',async(req,res)=>{
    const{name,email,password}=req.body
    const check= await user.findOne({email:email , password:password})
    if(check){
        res.send({message:"User alresdy exist"})

    }
    else{
        const data={
            name,
            email,
            password
        }
        await user.insertMany(data)
        res.send({message:"data saves succesfully"})
    }
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const checkk=await user.findOne({email:email,password:password})
    if(checkk){
        res.send({message:"Logined"})
    }else{
        res.send({message:'Sorry your data is not on database'})
    }
})

app.listen(port,()=>{
    console.log(`app is listning on port number ${port}`)
})