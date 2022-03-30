
//Middleware
const express = require('express')

// Routes
const indexRouter = require('./backend/index')

const app = express()

app.use(express.json())

const port = 3000


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


app.use(indexRouter)
