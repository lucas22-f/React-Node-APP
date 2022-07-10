import * as yup from "yup";

const logValid = yup.object({
    email: yup.string().email("El email debe ser valido").required("Campo requerido"),
    password: yup.string().required("Campo requerido")
})



export default logValid