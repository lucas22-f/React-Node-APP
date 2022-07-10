import React from 'react'
import { Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import resetPValid from '../utils/resetPValid'
import { useEffect, useState } from 'react'

function Reset() {
  const { token } = useParams()
  localStorage.setItem("JWT", token);
  const url = `http://localhost:3001/users/reset/${token}`
  const [ok, setOk] = useState({ message: "", itsok: true });
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch(url, { method: "GET", headers: { "Accept": "application/json", 'Content-Type': 'application/json',"Authorization":`${localStorage.getItem("JWT")}` }})
      if (!res.ok) {
        console.log(res.status, res.statusText);
      }
    }
    getToken()
  }, [url])



  const formik = useFormik({
    initialValues: {
      password1: "",
      password2: ""
    },
    validationSchema: resetPValid,
    onSubmit: async (values) => {
      const res = await fetch(url, { method: "POST", headers: { "Accept": "application/json", 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      const json = await res.json();

      if (!res.ok) {

        setOk({ message: "Ocurrio un error por favor intentelo otra vez", itsok: false });
      } else {
        setOk({ message: json.message, itsok: true });
        setTimeout(() => {
          navigate("/users/login")
        }, 3000)
      }


    }


  })



  return (
    <Container fluid className='bg-dark variant-dark text-white  p-5 d-flex form1 justify-content-around vh-100'>

      <Row className='col-md-4'>

        <Form onSubmit={formik.handleSubmit} >
          <Container fluid className='text-center p-5'>
            <h2> Reset de contraseña</h2>
          </Container>

          <Form.Label>Ingrese nueva contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name='password1' id='password1' {...formik.getFieldProps("password1")} />
          {formik.touched.password1 && formik.errors.password1 && <Form.Text className='text-danger d-flex'>{formik.errors.password1}</Form.Text>}
          <Form.Label className="mt-5">Repita nueva contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name='password2' id='password2'{...formik.getFieldProps("password2")} />
          {formik.touched.password2 && formik.errors.password2 && <Form.Text className='text-danger'>{formik.errors.password2}</Form.Text>}

          {ok.itsok != true ? <Alert variant='danger' className='mt-3'>{ok.message}</Alert> : <h5 className='mt-3 text-success'>{ok.message}</h5>}


          <Button className="mt-3 d-flex" variant="primary" type='submit'>
            Reestablecer Contraseña
          </Button>




        </Form>

      </Row>





    </Container>
  )
}

export default Reset