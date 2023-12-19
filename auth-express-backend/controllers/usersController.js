const express = require("express");
const bcrypt = require("bcryptjs");

const {
  getOneUser,
  getOneUserByEmail,
  createUser,
} = require("../queries/users.js");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const users = express.Router();

// LOGIN ROUTE
users.post( "/login", async ( req, res ) =>
{
  try {
    const {email, password} = req.body
    const login = await getOneUserByEmail( email )
    const checkPassword = bcrypt.compare( password, users.password )
      if (login === !users.email && checkPassword === !users.password) {
        return res.status(403).json({message:"Invalid Entry"})
    } 
    //This is where the token would be generated.
  } catch (error) {
    res.status(500).json({Error: 'Server Error'})
  }
});

// SIGN UP ROUTE
users.post( "/", async ( req, res ) =>
{
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname,!lastname,!email && !password) {
      return res.status(403).json({Error: "All Fields are required!"})
    }
    const saltRounds = await bcrypt.genSalt( 10 );
    const hashedPassword = await bcrypt.hash( password, saltRounds );
    const newUser = await createUser( { firstname, lastname, email, hashedPassword } );
    return res.status(201).json({message: "Congratulations, your account has been successfully created!"})
    
  } catch (error) {
    
  }
  
});



module.exports = users;
