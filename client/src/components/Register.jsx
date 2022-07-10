import React from 'react'
import { Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { useFormik } from 'formik'
import regValid from '../utils/regValid'
import "../App.css"
import img from "../assets/img/i3.jpg"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function Register() {
  const navigate = useNavigate();
  const [ok, setOk] = useState("");
  const [not, setNot] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      image:"",
    },
    validationSchema: regValid,
    onSubmit: async (values) => {

      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }


      const url = "http://localhost:3001/users/register"
      await axios.post(url, formData).then((res) => {
        setOk("Registro OK , redireccionando... ")
        setTimeout(() => {
          navigate("/users/login")
        }, 3000)

      }).catch((err) => {
        if (err.response.status === 401) {
          setNot("Email ya registrado");
        }
      })
    }
  })




  return (
    <Container fluid className='bg-dark variant-dark text-white p-5 d-flex form1 justify-content-around vh-100 '>
      <Container>
        <Row className=' mx-2 img-fluid'>
          <img src={img} className="img-fluid" alt="img" />
        </Row>
      </Container>

      <Row className='col-md-4'>

        <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">

          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name='email' id='email' placeholder="Ingresa tu email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
          <Form.Text className="text-muted">
            Todos tus datos estan asegurados.
          </Form.Text>

          <Form.Label className='d-flex'>Nombre</Form.Label>
          <Form.Control type="text" name='name' id='name' placeholder="Ingresa tu nombre"{...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}

          <Form.Label className='d-flex'>Usuario</Form.Label>
          <Form.Control type="text" name='username' id='username' placeholder="Ingresa tu nombre de usuario" {...formik.getFieldProps("username")} />
          {formik.touched.username && formik.errors.username && <div className='text-danger'>{formik.errors.username}</div>}

          <Form.Label className='d-flex mt-4'>Foto de perfil</Form.Label>
          <Form.Control type='file' name='image' id='image' onChange={(e) => formik.setFieldValue("image", e.currentTarget.files[0])}></Form.Control>
          {formik.touched.image && formik.errors.image && <div className='text-danger'>{formik.errors.image}</div>}

          <Form.Label className='d-flex'>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name='password' id='password'{...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password && <div className='text-danger'>{formik.errors.password}</div>}



          <Button className='mt-3' variant="primary" type="submit">
            Registrarme
          </Button>
          {ok && <Alert variant='success' className='mt-3'>{ok}</Alert>}
          {not && <Alert variant='danger' className='mt-3'>{not}</Alert>}

        </Form>

      </Row>




    </Container>
  )
}

export default Register