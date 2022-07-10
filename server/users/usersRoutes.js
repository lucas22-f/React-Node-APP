const router = require("express").Router()
const { isAuth } = require("../middlewares/jwtAuth");
const uploadFile = require("../utils/multerUtil");
const {validatorCreateUser,validatorEditUser} = require("../validators/users");
const { getAllUsers, register, login , forgot, reset , saveNewPass,getOne,deleteOne, updateOne} = require("./usersController");


// get all Users
router.get("/", getAllUsers);
// get one User
router.get("/perfil/:_id", isAuth ,getOne);
// Register User
router.post("/register", uploadFile.single("image"),validatorCreateUser, register);
// Delete one User
router.delete("/perfil/:_id",isAuth,deleteOne)
// Put/Update one User
router.put("/perfil/change/:_id",isAuth,uploadFile.single("image"),validatorEditUser,updateOne);


// reset password
router.get("/reset/:token",isAuth,reset);
// Login User
router.post("/login", login);
// Forgot Password
router.post("/forgot", forgot);
// Save New Pass
router.post("/reset/:token",saveNewPass);


module.exports = router;