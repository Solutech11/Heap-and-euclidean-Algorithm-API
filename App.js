const express = require('express')
const app = express()
const port = 3000

//body parser
app.use(require('body-parser').json())

//morgan 
app.use(require('morgan')('dev'))

//routes
app.use('/euclidean',require('./router/Euclidean'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))