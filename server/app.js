const express = require('express')
const cors = require('cors')
const connectionToMongoDB = require('./config/database')
const path = require('path')
const prisonersRoutes = require('./routes/prisoners')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/prisoners', prisonersRoutes)
app.use(express.static(path.join(__dirname, 'public')))

const myDatabase = 'Prison'
const url = `mongodb://127.0.0.1:27017/${myDatabase}`
connectionToMongoDB(url)

module.exports = app
