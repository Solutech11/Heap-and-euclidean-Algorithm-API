const express = require('express')
const app = express()
const port = process.env.PORT||3000

//body parser
app.use(require('body-parser').json())

//morgan 
app.use(require('morgan')('dev'))

//routes
app.use('/euclidean',require('./router/Euclidean'))

app.use('/heapsort',require('./router/HeapSort'))

app.listen(port, () => console.log(`server running`))