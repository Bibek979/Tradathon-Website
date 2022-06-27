const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5500;


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/tradathonDB", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {console.log("DB Connected")});

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String, 
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

// ***********************Registration Post Request ************************
app.post("/registration", (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "user already registered"});
        }
        else if(err){
            res.send({message: err});
        }
        else{
        const user = new User({
            firstname,
            lastname,
            email,
            password
    })
    user.save( err => {
        if(err)
            res.send("Save error "+err);
        else
            res.send({ message: "Success" })
    })
        }
    })
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({email: email}, (err, user) =>{
        if(user){
            if(password === user.password)
                res.send({message: "Login Successfull", user, status: 0});
            else{
                res.send({message: "Password doesn't match", status: 1});
            }
        }
        else{
            res.send({message: "Email doesn't exist", status: 2});
        }
    })
})



app.listen(port, () =>{
    console.log(`Blog app listening at http://localhost:${port}`)
})

