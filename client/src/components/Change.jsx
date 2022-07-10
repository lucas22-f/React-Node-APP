import { Container, Row, Button, Alert, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import changeValid from "../utils/changeValid";
import { React, useEffect, useState } from 'react'
import axios from "axios"

function Change() {
    const [data, setData] = useState({});
    const [ok, setOk] = useState("");
    const params = useParams();
    const url = `http://localhost:3001/users/perfil/${params._id}`
    const url2 = `http://localhost:3001/users/perfil/change/${params._id}`


    useEffect(() => {
        fetch(url, { headers: { "Authorization": `${localStorage.getItem("JWT")}` } })
            .then(res => res.json())
            .then(data => setData(data))

    }, []);


    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            username: ""
        },
        validationSchema: changeValid,
        onSubmit: async (values) => {
            const formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value]);
            }
            setTimeout(async () => {
                await axios.put(url2, formData, { headers: { "Authorization": `${localStorage.getItem("JWT")}` } }).then((res) => {
                    setOk(`${res.data}`)
                }, 5000);

            }).catch((err) => {
                if (err.response.status === 401) {
                    setNot("Email ya registrado");
                }
            })
        }
    })

    return (
        <Container fluid className='bg-dark variant-dark text-white  p-5 d-flex form1 justify-content-around vh-100'>



            <Row className='col-md-4'>

                <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name='email' id='email' value={data.email} {...formik.getFieldProps("email")} placeholder="Ingresa nuevo email" />
                    {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
                    <Form.Label className='d-flex'>Nombre</Form.Label>
                    <Form.Control type="text" name='name' id='name' value={data.name} {...formik.getFieldProps("name")} placeholder="Ingresa nuevo nombre" />
                    {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}
                    <Form.Label className='d-flex'>Usuario</Form.Label>
                    <Form.Control type="text" name='username' id='username' value={data.username} {...formik.getFieldProps("username")} placeholder="Ingresa nuevo nombre de usuario" />
                    {formik.touched.username && formik.errors.username && <div className='text-danger'>{formik.errors.username}</div>}

                    <Form.Label className='d-flex mt-4'>Foto de perfil</Form.Label>
                    <Form.Control type='file' name='image' id='image' onChange={(e) => formik.setFieldValue("image", e.currentTarget.files[0])}></Form.Control>


                    {ok && <Alert variant='success' className='mt-3'>{ok}</Alert>}

                    <Button className='mt-3' variant="primary" type="submit">
                        Cambiar Datos
                    </Button>

                    <Button className='mt-3 mx-3' variant="danger">
                        <Link className="text-white" to={`/users/perfil/${params._id}`}>Volver</Link>
                    </Button>


                </Form>

            </Row>
            <h1>Hola! {data.username} Este es tu perfil </h1>





        </Container>
    )
}

export default Change