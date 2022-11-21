//Create a user schema:
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema= new Schema({
    username: String,
    email:{
        type: String,
        requied : true
      } ,
    bio: String,

})

const User = mongoose.model('User', userSchema)

module.exports = User;