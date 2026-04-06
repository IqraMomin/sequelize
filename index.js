const express = require('express');
const app = express();
const port = 3000;
const db = require("./utils/db-connection");
const studentModel = require("./models/Students");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

db.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log("Server is Up and Running on port",port);
    })
}).catch(err=>{
    console.log(err);
})

