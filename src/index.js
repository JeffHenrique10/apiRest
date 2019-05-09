const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongoose://localhost:27017/noded', {
  useNewUrlParser: true
})

require('./models/Product')

const Product = mongoose.model('Product')

app.use('/api', require('./src/routes'))

app.listen(3000)
