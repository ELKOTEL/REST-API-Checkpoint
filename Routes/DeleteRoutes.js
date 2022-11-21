const express = require ('express')
const router = express.Router()
const User  = require ('../Models/User')

//delete user by id
router.delete('/:id' ,(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })

module.exports = router