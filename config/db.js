const mongoose = require('mongoose')
const express = require('express')
const app = express()


const URI = "mongodb+srv://name:pass@cluster0.p9vxhp1.mongodb.net/db_name?retryWrites=true&w=majority"

// listen for request
const connection = mongoose.connect(URI)
   .then((result) => {
      app.listen(5000)
      console.log('Connected')
   })
   .catch((err) => console.log(err))

module.exports = mongoose