const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const { referalController } = require('./src/routes/referalRoutes');
const { connection } = require('./src/config/db');
require('dotenv').config();

const port = process.env.PORT || 9090;

const app = express()

app.use(cors())

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ "Message": "Welcome to server..." })
})



app.use('/referal', referalController)



app.listen(port, async () => {
  try {
    await connection
    console.log("connected to DB")
    console.log(`server is listining on port ${port}`)
  } catch (error) {
    console.log(error)
  }
})