const express = require('express');
const app=express();
const dotenv=require('dotenv');
const connectToDb=require('./database/db')
require('dotenv').config();

const cors=require('cors');
const userRoutes=require('./routes/user.routes');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoutes);
connectToDb();

module.exports=app;