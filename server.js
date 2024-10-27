 require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const errorMiddleware =require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express();

//Env variable setting
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND=process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json());

//routes example
app.use('/api/products',productRoute);

app.get('/',(req,res)=>{  
    
    res.send("Hello Node API, Looking fine !");
})
app.get('/blog',(req,res)=>{
    res.send("Hello Node API, Looking fine2 !");
})
app.use(errorMiddleware);
//DataBase Implementation in mangoDB
   mongoose.
   connect(MONGO_URL) 
   .then(() => {
    console.log('connected to MangoDB!')
    app.listen (PORT,()=>{ 
    console.log(`Node app is running on port ${PORT}`)
}) 
})
   .catch((error) => {console.log(error)

   })