const User = require("../models/userModels")
const bcrypt = require('bcrypt');


const login = async(req,res)=>{
    let {name,password}=req.body

    let existingUser = await User.findOne({name:name})
  if (existingUser == null) {
    return res.send(" We can not find any account with this name")
  }
  bcrypt.compare(password,existingUser.password,function(err,result){
    if(result){
          return res.send("login successful")
    }else{
        return res.send("no existing user")
    }
  })
}

module.exports = login