const jwt = require("jsonwebtoken");
const jwt_pass = process.env.jwt_pass

const tokenSing = async(user,time) =>{
    return jwt.sign(user,jwt_pass,{expiresIn: time});
}

const tokenVerify = async(token) =>{
    try {
        return jwt.verify(token,jwt_pass)
    } catch (error) {
        return error;
    }
}

module.exports = {tokenSing,tokenVerify}