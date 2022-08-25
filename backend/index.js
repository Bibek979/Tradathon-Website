const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5500;
// var pwd = encodeURIComponent(".,Bibek//721133");


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// mongoose.connect("mongodb+srv://bibekProject:.,Bibek//721133@cluster0.q4a1n.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }, () => {console.log("DB Connected")})
// .catch(
//     (error) => {console.log("Connection Error "+error)}
// );

mongoose.connect("mongodb+srv://bibekProject:.%2CBibek%2F%2F721133@cluster0.q4a1n.mongodb.net/?retryWrites=true&w=majority")
.then(
    console.log("Connected online database")
)
.catch((error)=>{console.log(error)})

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String, 
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);
const Courses = new mongoose.model("Courses", userSchema);

// ***********************Registration Post Request ************************

app.post("/registration", (req, res) => {
    var { firstname, lastname, email, password } = req.body;
    email = email.toLowerCase();
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
    var { email, password } = req.body;
    console.log(email);
    email = email.toLowerCase();
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

app.get("/course", (req, res) => {
    Courses.find()
    .then(foundCourses => res.json(foundCourses))
})

app.get("/userdashboard",(req, res) => {
    if(Courses.find())
    {
        Courses.find()
        .then(foundCourses => res.json(foundCourses))
    }
    else{
        res.send({message: "Failed"})
    }
})



app.listen(port, () =>{
    console.log(`Blog app listening at http://localhost:${port}`)
})

