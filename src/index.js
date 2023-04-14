const express = require('express');
const app = express();
const userRouter = require('../routes/userRoutes');
const noteRouter = require('../routes/noteRoutes');

const mongoose = require('mongoose');

app.use('/users', userRouter)
app.use('/notes', noteRouter)



app.get('/', (req, res) => {
    res.send("Hey fuckers")
})


mongoose.connect("mongodb+srv://admin:code@donibapi.qqipmei.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then( () => {
        console.log("Database connected to mongoDB successfully!")
        app.listen(8080, () => {
            console.log("Server started at port 8080")
        })
    })
    .catch( (error) => {
        console.log(error);
    })

