const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill in your name"],
  },
  email: {
    type: String,
    required: [true, "Fill in your name"],
    unique: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please enter a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minLength: [6, "Password must be up to 6 characters"],
    //   maxLength: [23, "Password must not be more than 23 characters"],
  },
},
{
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema)

module.exports = User