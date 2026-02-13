const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {findUserByEmail} = require("../models/userModel");

exports.login = async (req, res) =>{
    try{
        const {email,password} = req.body;
        const user = await findUserByEmail(email);

        if(!user){
            return res.status(400).json({message:"user not found"});


        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid password"});
        };
        const token = jwt.sign(
            {id:user.id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        res.cookie("token", token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:24*60*60*1000,
        });
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};