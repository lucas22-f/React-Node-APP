const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashearPASS  = async(pass) =>{
    return await bcrypt.hash(pass,saltRounds)
}

const compararPASS = async(pass,hashedPASS) =>{
    return await bcrypt.compare(pass,hashedPASS);
}

module.exports = {
    hashearPASS,
    compararPASS
}