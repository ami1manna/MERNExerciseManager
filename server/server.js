require('dotenv').config();
const express = require('express');

//express app 
const app = express();

app.get('/',(req,res)=>{
    res.json({mssg:'Welcome user'})
}
)
//listen or request
app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000 !!')
})