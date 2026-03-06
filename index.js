const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Jay_patel:jay_patel@cluster0.nu484tb.mongodb.net/testdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const User = mongoose.model("User", {
    name: String,
    age: Number,
    email: String
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.post("/users/many", async (req, res) => {
    const users = await User.insertMany(req.body);
    res.json(users);
});

app.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

app.patch("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

app.delete("/users/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));