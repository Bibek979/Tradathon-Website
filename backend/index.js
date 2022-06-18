const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`hello whorld`)
});
console.log("Hello");