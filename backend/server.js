import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from 'mongoose'

//import data from './data.json'

// Database for project 
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/finalProject'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


//Collection for database. 
const Game = mongoose.model('Game', {
    directions: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true
    },
    hint: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

//Port 3000 npm start 
const port = process.env.PORT || 3000
const app = express ()

//middleware to enable cors and json body parsing 
app.use(cors())
app.use(bodyParser.json())

//start defining my routes here: 
app.get('/', (req, res) => {
    res.send("Hello Final project! 😍 ")
})

app.get('/games', (req, res) => {
    Game.find().then(games => {
        res.json(games)
    })
})

app.post('/games', async (req, res) => {
    const game = new Game(req.body)

    try{
        const savedGame = await game.save()
        res.status(201).json(savedGame)
    }catch (err) {
        res.status(400).json({ message: "Please fill out all boxes to build the game", error:err.errors})
    }
})


// Starting the server 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})