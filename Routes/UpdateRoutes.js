const express = require ('express')
const router = express.Router()
const User  = require ('../Models/User')

//put user by id
router.put('/:id' ,(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })

module.exports = router