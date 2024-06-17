require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//import routes 
const workoutRoutes = require('./routes/workouts')

//import cors
const cors = require('cors');

//express app 
const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173' // Allow only this origin
}));

//middle ware
app.use(express.json());// added for putting data to be send to server
app.use((req,res,next)=>
    {
        console.log(req.path,req.method)
        next();
    })

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // after connected to database
    //listen or request
    app.listen(process.env.PORT,()=>{
        console.log('connected to db and listening on port 4000 !!')
})

})
.catch((error)=>{
    console.log(error)
})


