const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Jay_patel:jay_8141@cluster0.nu484tb.mongodb.net/testdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const User = mongoose.model("User",{
    name:String,
    age:Number,
    email:String
});

app.get("/users", async (req,res)=>{
    res.json(await User.find());
});

app.get("/users/:id", async (req,res)=>{
    res.json(await User.findById(req.params.id));
});

app.post("/users", async (req,res)=>{
    res.json(await User.create(req.body));
});

app.post("/users/many", async (req,res)=>{
    res.json(await User.insertMany(req.body));
});

app.put("/users/:id", async (req,res)=>{
    res.json(await User.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});

app.patch("/users/:id", async (req,res)=>{
    res.json(await User.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});

app.delete("/users/:id", async (req,res)=>{
    res.json(await User.findByIdAndDelete(req.params.id));
});

app.listen(3000,()=>console.log("Server running on port 3000"));