import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';

//app config
const app = express();
const port = process.env.PORT || 8001;
const url_connection = `mongodb+srv://admin:OgV7OlHKOnrBeshk@cluster0.exw64.mongodb.net/tinder-clone?retryWrites=true&w=majority`

//middlewares

//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send("HELLO");
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));