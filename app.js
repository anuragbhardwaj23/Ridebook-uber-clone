const express = require('express');
const app=express();
const dotenv=require('dotenv');
const connectToDb=require('./database/db')
dotenv.config();
const cors=require('cors');
app.use(cors());
connectToDb();

module.exports=app;