

import React from 'react'
import { useState } from 'react'
import { Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from "formik";
import logValid from "../utils/logValid"
import "../App.css"
import img from "../assets/img/i2.jpg"

function Login() {



  const navigate = useNavigate()

  let [error, setError] = useState("");



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logValid,
    onSubmit: async (values) => {
      const url = "http://localhost:3001/users/login"
      const res = await fetch(url, { method: "POST", headers: { "Accept": "application/json", 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const json = await res.json();
      if (res.status === 404)
        setError("usuario no encontrado");
      if (res.status === 401) {
        setError("Usuario o contraseña incorrectos")
      }

      localStorage.setItem("JWT", json.JWT);
      localStorage.setItem("_id", json._id);


      if (localStorage.getItem("JWT") === "undefined") {
        return
      } else {
        navigate("/dashboard")
      }

    }

  })






  return (

    <Container fluid className='bg-dark variant-dark text-white  p-5 d-flex form1 justify-content-around vh-100'>

      <Container className='form1'>
        <Row className=' mx-2 '>
          <img src={img} className="img-fluid" alt="img" />
        </Row>
      </Container>

      <Row className='col-md-4'>

        <Form onSubmit={formik.handleSubmit} >

          <Form.Label>Direccion de Email</Form.Label>
          <Form.Control type="text" placeholder="Email" name='email' id='email' {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && <Form.Text className='text-danger'>{formik.errors.email}</Form.Text>}


          <Form.Label className='d-flex mt-3'>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name='password' id='password' {...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password && <Form.Text className='text-danger '>{formik.errors.password}</Form.Text>}

          <Form.Text className='text-muted'><Link className='text-secondary' to="/users/forgot"> Olvido su contraseña?</Link></Form.Text>

          {error && <Alert variant='danger' className='mt-3'  >{error}</Alert>}
          <Button className="mt-3 d-flex" variant="primary" type='submit'>
            Ingresar
          </Button>


        </Form>

      </Row>





    </Container>



  )
}

export default Login