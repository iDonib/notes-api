const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.use('/users', userRouter)
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
    res.send("Hey fuckers")
})

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URI
mongoose.connect(uri)
.then( () => {
    console.log("Database connected to mongoDB successfully!")
    app.listen(PORT, () => {
        console.log("Server started at port "+ PORT)
    })
})
.catch( (error) => {
    console.log(error)
})
