const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/api')
require('dotenv').config()

const app = express()
const mongoUrl = process.env.MONGO_DEBUG_URL
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', authRoutes)
app.use('/api', apiRoutes)


mongoose.connect(mongoUrl, { useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true, useNewUrlParser: true })
    .then((res) => app.listen(port, () => console.log(`Server listening on port ${port}`)))
    .catch((e) => console.log(e))
