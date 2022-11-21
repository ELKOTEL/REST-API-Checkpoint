const express = require ('express')
const router = express.Router()
const User  = require ('../Models/User')

//get users
router.get('/' ,(req,res)=>{
    User.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })

module.exports = router