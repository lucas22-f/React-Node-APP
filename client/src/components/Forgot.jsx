import React from 'react'
import { useState } from 'react'
import { Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { useFormik } from "formik";
import "../App.css"
import img from "../assets/img/i2.jpg"
import resetValid from '../utils/resetValid';


function Forgot() {
    const [ok,setOk] = useState({message:"",itsok: true});
    const formik = useFormik({
        initialValues:{
            email:""
        },
        validationSchema: resetValid,
        onSubmit: async (values) =>{
            const url="http://localhost:3001/users/forgot"
            const res = await fetch(url,{method:"POST",headers: { "Accept": "application/json", 'Content-Type': 'application/json' },body:JSON.stringify(values)});
            if(!res.ok){
              setOk({message:"Ocurrio un error Verifique el mail",itsok:false})
            }else{
              setOk({message:"Mail de verificacion enviado, por favor revise su bandeja de entrada",itsok:true})
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

      <Form onSubmit={formik.handleSubmit}>

        <Form.Label>Ingrese su Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name='email' id='email' {...formik.getFieldProps("email")}/>
       {formik.errors.email && formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>}
      
      
       
        <Button className="mt-3 d-flex" variant="primary" type='submit'>
          Enviar Confirmacion
        </Button>

        {ok.itsok!=true ? <Alert variant='danger' className='mt-3'>{ok.message}</Alert>: <div  className='mt-3 text-success'>{ok.message}</div>}


      </Form>

    </Row>





  </Container>




  )
}

export default Forgot