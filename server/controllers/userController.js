//import 3rd party libraries
const asyncHandler = require('express-async-handler');
//import from local files
const User = require('../models/userModel');



const registerUser = asyncHandler(async (req, res) => {
    const{ name, email, password } = req.body

    //validation
    //checking if the user filled in the required information
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Fill in all required fields')
    }
    //checking if the user password is 8 characters or greater
    if(password.length < 8){
        res.status(400);
        throw new Error("Password characters must be at least 8 characters");
    }
    //checking if the email exist in the database
    const userExists = await User.findOne({ email });
    if(userExists){
        res.status(400);
        throw new Error("Email already exists");
    }


    //create a new user
    const user = await User.create({
        name,email,password,
    });

    //getting user information from the database
    if(user){
      const { _id, name, email } = user;
      res.status(201).json({
        _id,
        name,
        email,
      });
      //incase user is not registered to the database
    }else {
        res.status(404)
        throw new Error('something wrong happened')
    }
}); 

module.exports = {
    registerUser,
}