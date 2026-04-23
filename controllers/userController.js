const users = require('../models/userModel')
const bcrypt = require('bcrypt');

//register
exports.registerController = async (req,res) =>{
    console.log("Inside registerController");
    console.log(req.body);    
    const {username,email,password} = req.body
    //check email is in db
    const existingUser = await users.findOne({email})
    if(existingUser){
    // if present , send response as  please login
        res.status(409).json("User Already Exists... Please Login!!!")
    }else{
    // if not present, add all details to db, send response as newly inserted document details
        let encryptPassword = await bcrypt.hash(password,10)
        const newUser = await users.create({
            username,email,password: encryptPassword
        })
        res.status(201).json(newUser)
    }
}

//login

//user edit

//admin edit