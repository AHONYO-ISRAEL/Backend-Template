const express = require('express');
const cors = require('cors')
const app = express()





// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))




module.exports = app