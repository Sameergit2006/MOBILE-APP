const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./model/user.model.js')
app.use(express.json())

mongoose.connect('mongodb+srv://sameerbashatrichy:fEDfaKVwhonGt6Bw@backenddb.sgzmsee.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
      app.listen(5000,()=>{
      console.log("server is running on port 5000")
})
      console.log("Connected to database")
})
.catch(()=>{
      console.log("Failed to connect")
})

app.get('/',(req,res)=>{
      res.send("hello from Sameer Basha J")
})

//post
app.post('/prolinks/users',async (req,res)=>{
      try{
            const user = await User.create(req.body)
            res.status(200).json(user)
      }catch(error){
            res.status(500).json({message:error.message})
      }
})
//get all products
app.get('/prolinks/users',async (req,res)=>{
      try{
            const user = await User.find({})
            res.status(200).json(user)
      }catch(error){
            res.status(500).json({message:error.message})
      }
})
//get by id
app.get('/prolinks/user/:id',async(req,res)=>{
      try{
            const {id} = req.params
            const user = await User.findById(id)
            res.status(200).json(user)
      }catch(error){
            res.status(500).json({message:error.message})
      }
})

//update

app.put('/prolinks/user/:id',async (req,res)=>{
      try{
            const {id} = req.params
            const product = await User.findByIdAndUpdate(id,req.body)
            if (!product){
                  return res.status(404).json({message:"Product not found"})
            }
            const updatedProduct = await User.findById(id)
            res.status(200).json(updatedProduct)

      }catch(error){
            res.status(500).json({message:error.message})
      }
})

//Delete a Product
app.delete('/prolinks/user/:id',async (req,res)=>{
      try{
            const {id} = req.params
            const product = await User.findByIdAndDelete(id)
            if (!product){
                  return res.status(404).json({message:"Product not found"})
            }
      }catch(error){
            res.status(500).json({message:error.message})
      }      
})
