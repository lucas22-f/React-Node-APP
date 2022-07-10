import * as yup from "yup";

const resetValid = yup.object({
    email: yup.string().email("El email debe ser valido").required("Campo requerido"),
})



export default resetValid