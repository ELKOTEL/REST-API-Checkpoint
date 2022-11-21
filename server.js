const express = require('express')
const  mongoose = require('mongoose')
require('dotenv').config()
const User = require ('./Models/User')
const app = express()

const mongoUrl = 'mongodb+srv://Elkotel:dreamer@cluster0.s8h135w.mongodb.net/test'
mongoose.connect( mongoUrl , (err)=>{
  err? console.log(err) : console.log('database is connected')

})
app.use(express.json())
app.use('/users' , require('./Routes/GetRoutes') )
app.use('/users' , require('./Routes/PostRoutes') )
app.use('/users' , require('./Routes/DeleteRoutes') )
app.use('/users' , require('./Routes/UpdateRoutes'))
const port =  8080
app.listen(port,(err)=>{
    err? console.log(err) : console.log('server is running')
})
