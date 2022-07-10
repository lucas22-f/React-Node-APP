const { tokenVerify } = require("../utils/jwtUtils");
const isAuth = async (req, res, next) => {
    //Para comprobar si el user viene con un jwt 
    if (!req.headers.authorization) {
        let error = new Error("No token provided")
        error.status = 403;
        return next(error)
    }
    //en este caso si tenemos un token asi que lo separamos del 
    //bearer con .pop
   
    const token = req.headers.authorization.split(" ").pop()
    const trueToken = await tokenVerify(token)

    if (trueToken instanceof Error) {
        let error = new Error( "Token incorrecto o expirado")
        error.status = 403
        return next(error);
    }

    req.token = trueToken;
    next();



}

module.exports = { isAuth }
