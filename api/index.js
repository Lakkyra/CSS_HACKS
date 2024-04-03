import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config/config.js';
import path from 'path';
const __dirname = path.resolve();
dotenv.config({
    path: __dirname.replace("build", ".env"),
  });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });  // Connect to MongoDB

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });