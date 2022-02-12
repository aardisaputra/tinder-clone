import express from 'express';
import mongoose from 'mongoose';

//app config
const app = express();
const port = process.env.PORT || 8001;

//middlewares

//db config

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send("HELLO");
})

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));