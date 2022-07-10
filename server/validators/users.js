const { check, validationResult } = require("express-validator");

const validatorCreateUser = [
    check("name")
        .exists().withMessage("campo requerido")
        .trim()
        .isLength({ min: 2, max: 90 }).withMessage("min 2 char"),

    check("username")
        .exists().withMessage("campo requerido")
        .isLength({ min: 2, max: 90 }).withMessage("min 2 char"),


    check("email")
        .exists().withMessage("email requerido")
        .trim()
        .isEmail().withMessage("formato email requerido")
        .normalizeEmail(),


    check("password")
        .exists().withMessage("requerido")
        .trim()
        .isLength({ min: 2, max: 20 }).withMessage("min 2 char"),

    (req, res, next) => {
        try {
            console.log(req.body)
            validationResult(req).throw()
            return next();
        } catch (error) {
            res.status(400).json({ errors: error.array() });
        }
    }

]

const validatorEditUser = [
    check("name")
        .exists().withMessage("campo requerido")
        .trim()
        .isLength({ min: 2, max: 90 }).withMessage("min 2 char"),

    check("username")
        .exists().withMessage("campo requerido")
        .isLength({ min: 2, max: 90 }).withMessage("min 2 char"),

    check("email")
        .exists().withMessage("email requerido")
        .trim()
        .isEmail().withMessage("formato email requerido")
        .normalizeEmail(),


    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next();
        } catch (error) {
            res.status(400).json({ errors: error.array() });
        }
    }
]


module.exports = { validatorCreateUser, validatorEditUser };