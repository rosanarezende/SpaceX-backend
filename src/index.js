require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

const launchesRoutes = require('./routes/launches')

app.use(cors())
app.use(express.json())
app.use('/lancamentos', launchesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
