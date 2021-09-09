require('dotenv').config()

const express = require('express');

const app = express();

const PORT = process.env.PORT;

const mongodb = require('./config/mongodb.config')
mongodb();

//MIDDLEWARES:
app.use(express.json());
app.use(express.urlencoded({extended:true}));







app.listen(PORT,()=>{
  console.log(`1: Server is runnig in port: ${PORT}`);
})