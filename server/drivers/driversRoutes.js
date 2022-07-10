const router = require("express").Router();
const { isAuth } = require("../middlewares/jwtAuth");
const {getAllDrivers, getOne} = require("./driversController");

router.get("/",isAuth,getAllDrivers)
router.get("/:_id",getOne);
module.exports = router;