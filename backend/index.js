import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import connectDB from './config/db.js';
connectDB();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Working')
})
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})