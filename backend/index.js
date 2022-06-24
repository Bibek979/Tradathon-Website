const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5500;

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const DB = 'mongodb://localhost:27017';

mongoose.connect(DB).then(
    ()=>{
        console.log('Connection Successful');
    }
).catch((err) => console.log('No Connection'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));   
});

app.get('/about', (req, res) => {
    res.send(`Hello about section`);
});

app.get('/registered', (req, res) => {
    
    // db.collection('signupData').insertOne(req.body, (err, data) =>{
    //     if(err) return console.log(err);
    //     res.send(('saved  to db: ' + data))
    // })
    res.send(`Hello about Registration`);
    console.log('hello')
});

app.listen(port, () =>{
    console.log(`Blog app listening at http://localhost:${port}`)
})

