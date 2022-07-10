import * as yup from "yup"

const resetPValid = yup.object({
    password1: yup.string().required("Campo requerido"),
    password2: yup.string().required("Campo requerido").oneOf([yup.ref("password1")],"las Contraseñas deben coincidir")
})


export default resetPValid