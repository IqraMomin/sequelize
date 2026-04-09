const express = require('express');
const app = express();
const port = 3000;
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");

require('./models');

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/students",studentRoutes);

db.sync({alter:true}).then(()=>{
    app.listen(port,()=>{
        console.log("Server is Up and Running on port",port);
    })
}).catch(err=>{
    console.log(err);
})

