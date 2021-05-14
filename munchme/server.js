const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/api')

const app = express()
const mongoUrl = 'mongodb+srv://utibeabasi:Utibeabasi6@cluster0.eouyb.mongodb.net/munchme'
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', authRoutes)
app.use('/api', apiRoutes)


mongoose.connect(mongoUrl, { useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true, useNewUrlParser: true })
    .then((res) => app.listen(port, () => console.log(`Server listening on port ${port}`)))
    .catch((e) => console.log(e))
