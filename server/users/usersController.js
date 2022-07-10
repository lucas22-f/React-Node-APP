const { hashearPASS, compararPASS } = require("../utils/bcryptUtils");
const { tokenSing, tokenVerify } = require("../utils/jwtUtils");
const { transport, createMail } = require("../utils/mailtrap");
const User = require("./usersModel");
const {matchedData} = require("express-validator");
const sv_url = process.env.sv_url;


const getAllUsers = async (req, res, next) => {
    const data = await User.find();
    const data1 = data.map((user) => {
        const filterUsers = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            image: user.image
        }
        return filterUsers;
    })
    if (data instanceof Error) return next(data);
    data.length ? res.status(200).json(data1) : next();

}

const getOne = async(req,res,next)=>{
   
    user_id = req.params._id;
    try {
        const data = await User.findById(user_id);
        return res.status(200).json(data); 
    } catch (error) {
        error.message = "INVALID ID"
        return res.status(204).json({message:`${error.message}`});
    }
    
}

const deleteOne = async(req,res,next)=>{
    const user_id=req.params._id
    const data = await User.findByIdAndDelete(user_id)
    if(data instanceof Error) next(data);
    return res.status(200).json({message:"User ELIMINADO "});
}

const updateOne = async(req,res,next)=>{
    const user_id = req.params._id;
    const image = `${sv_url}/${req.file.filename}`
    const cleanBody = matchedData(req);
    const data = await User.findByIdAndUpdate(user_id,{...cleanBody,image},{new:true});
    if (data instanceof Error) next(data);
    res.status(200).json("User ACTUALIZADO");
}



const register = async (req, res, next) => {

    const cleanBody = matchedData(req)
     if (await User.findOne({ email: cleanBody.email })) {
        const err = new Error("Email ya registrado")
        err.status = 401;
        return next(err)
    } else {
        const password = await hashearPASS(req.body.password);
        const image =`${sv_url}/${req.file.filename}`
        
        

        const jwtuser = {
            _id: cleanBody._id,
            name: cleanBody.name,
            email: cleanBody.email,
        }
        const token = await tokenSing(jwtuser, "15m");

        const newUser = await User({ ...cleanBody, password,image});
        if (newUser instanceof Error) return next(newUser);

        newUser.save();

        
        res.status(201).json({ message: "Usuario Creado", JWT: token })
    } 



}

const login = async (req, res, next) => {

    const data = await User.find({ email: req.body.email });
    if (!data.length) return next();
    if (await compararPASS(req.body.password, data[0].password)) {
        const user = {
            _id: data[0]._id,
            name: data[0].name,
            email: data[0].email,
            password: data[0].password,
        }   
        const _id = data[0]._id;
        const token = await (tokenSing(user, "15m"));
        res.status(200).json({ message: "Usuario Ingresado al sistema", JWT: token, _id:_id })

    } else {
        let error = new Error("email o contraseña invalidos")
        error.status = 401
        next(error)
    }


}

const forgot = async (req, res, next) => {
    const data = await User.findOne({ email: req.body.email })
    if (data) {

        const mail = await createMail(data);//creamos nuestra funcion que toma de /utils/mailtrap los datos para retornar el mail para hacer el transport 
        transport.sendMail(mail, (error) => {
            if (error) {
                error.message = error.code
                next(error)
            } else res.status(200).json({ message: `Mensaje Enviado a : ${data.name}, Con el MAIL : ${data.email}` })
        })

    } else {
        let error = new Error("Email no registrado")
        error.status = 401
        next(error)

    }

}

const reset = async (req, res, next) => {
    const { token } = req.params;
    const tokenV = tokenVerify(token);
    if (tokenV instanceof Error) {
        res.status(400).json({ message: "token invalido" })
        next(tokenV);
    } else {
        res.status(200).json({ message: "token OK" });
    }
}

const saveNewPass = async (req, res, next) => {
    const { token } = req.params;
    const verifyT = await tokenVerify(token);
    if (verifyT instanceof Error) {
        res.status(400).json({ message: "token invalido" })
        next(verifyT)
    } else {
        const pass = await hashearPASS(req.body.password1);
        const passT = { password: pass }
        const email = { email: verifyT.email }
        await User.findOneAndUpdate(email, passT)
        res.status(200).json({ message: "Contraseña Correctamente Actualizada" });
    }
}




module.exports = { getAllUsers, register, login, forgot, reset, saveNewPass,getOne, deleteOne,updateOne }