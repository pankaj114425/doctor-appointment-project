 const express = require('express')
 const colors=require('colors')
 const moragan=require('morgan')
 const dotenv=require('dotenv');
const connectDB = require('./config/db');
 
// dotnev config
dotenv.config({path: 'routes/.env'});
//mongodb connection
 connectDB();
//rest object
const app=express()

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
// app.get("/",(req,res)=>{
//     res.status=(200).send({
//         message:"server running",
//     });
// });  purpose for test 

//we add main route of user 
app.use('/api/v1/user',require('./routes/userRoutes'));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
 app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
// port
const port =process.env.PORT || 8080
//listen
app.listen(port,()=>{
    console.log(
        `server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white
        );
});
