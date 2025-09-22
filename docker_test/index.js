import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    res.send("asd")
})

app.listen(8080, (err) => {
    console.log('http://localhost:8080/')
})