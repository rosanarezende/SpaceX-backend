const cors = require('cors')
const axios = require('axios')
const express = require('express')
const app = express()

const baseUrl = "https://api.spacexdata.com/v4/launches"

app.use(cors())

// Próximos lançamentos
app.get('/upcoming', async (req, res) => {
  try {
    const { data } = await axios(`${baseUrl}/upcoming`)
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

// Lançamentos passados
app.get('/past', async (req, res) => {
  try {
    const { data } = await axios(`${baseUrl}/past`)
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

// Próximo lançamento
app.get('/next', (req, res) => {
  try {
    const { data } = await axios(`${baseUrl}/next`)
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

// Último lançamento
app.get('/latest', (req, res) => {
  try {
    const { data } = await axios(`${baseUrl}/latest`)
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

app.listen('1234', () => {
  console.log('Server running at http://localhost:1234')
})
