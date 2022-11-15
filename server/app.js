const express = require('express');
const app = express();
const port=5000;
const cors= require('cors')
const mongoose = require('mongoose');
const { MONGOURL } = require('./secret.js');
require('./models/user')

//sagar3256
//LzEhV9ZxETrDa0Lv

mongoose.connect(MONGOURL)

mongoose.connection.on('connected', 
    () => { console.log('Connected to Mongo'); 
})

mongoose.connection.on('error',
    () => { console.log('Error connecting to Mongo')
})

app.use(express.json())
app.use(cors())
app.use(require("./routes/auth"))

app.get("/",(req,res)=>{
    res, send("Hello World");
})

app.listen(port, () => { console.log(`Listening on port ${port}`) });