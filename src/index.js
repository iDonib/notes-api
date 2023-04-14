const express = require('express');
const app = express();
const quotes = require('./quotes.json')
const userRouter = require('../routes/userRoutes');
const noteRouter = require('../routes/noteRoutes');

app.use('/users', userRouter)
app.use('/notes', noteRouter)



app.get('/', (req, res) => {
    res.send("Hey fuckers")
})

app.get('/quote', (req, res) => {
    res.status(200).json(quotes);
})

app.get('/random', (req, res) => {
    let index = Math.floor(Math.random() * quotes.length)
    let quote = quotes[index];
    res.status(404).json(quote)
})

app.listen(8080, () => {
    console.log("server started at port 8080")
})