const bcrypt = require('bcrypt');
const User = require ("../models/userModels")

const registrationController = async (req, res) => {
  const { name, password } = req.body;

  if (!name || name ==undefined ) {
    return res.send("name required");
  }
  if (!password || password == undefined) {
    return res.send("password required");
  }


  let existingUser = await User.findOne({name:name})
  if (existingUser != null) {
    return res.send("this user already exists")
  }
 
      bcrypt.hash(password, 10, async function(err,hash){
        
        const user = new User({
          name: name,
          password: hash,
        });
    
        await user.save(); 
    
        return res.json({
          message: "Registration successful",
          id: user._id,
          name: user.name,
        });

      })
};

module.exports = registrationController;
