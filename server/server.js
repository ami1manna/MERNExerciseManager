require('dotenv').config();
const express = require('express');

//import routes 
const workoutRoutes = require('./routes/workouts')

//express app 
const app = express();

//middle ware
app.use(express.json());// added for putting data to be send to server
app.use((req,res,next)=>
    {
        console.log(req.path,req.method)
        next();
    })

//routes
app.use('/api/workouts',workoutRoutes)


//listen or request
app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000 !!')
})