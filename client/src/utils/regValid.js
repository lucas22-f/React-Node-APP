import * as yup from "yup"

const regValid = yup.object({
    email: yup.string().email("El email debe ser valido").required("Campo Requerido"),
    name: yup.string().min(3, "min 3 caracteres").max(15, "max 15 caracteres").required("Campo Requerido"),
    username: yup.string().min(3, "min 3 caracteres").max(15, "max 15 caracteres").required("Campo Requerido"),
    password: yup.string().min(3, "min 3 caraceters").max(15, "max 15 caracteres").required("Campo Requerido"),
    image: yup.mixed().required("imagen requerida"),
})

export default regValid;