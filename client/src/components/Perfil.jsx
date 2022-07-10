import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Button, ListGroup, ListGroupItem, Alert } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
function Perfil() {

    const [data, setData] = useState({});
    const [dlt, setDlt] = useState("")
    const params = useParams();
    const url = `http://localhost:3001/users/perfil/${params._id}`
    const navigate = useNavigate();
    useEffect(() => {


        fetch(url,{headers:{"Authorization":`${localStorage.getItem("JWT")}`}})
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const handleDelete = () => {
        setDlt("User Eliminado, redirect...")
        

        setTimeout(() => {
            fetch(url, { method: "DELETE" , headers:{"Authorization":`${localStorage.getItem("JWT")}`} }).then(res => res.json())
            navigate("/users/login")
            localStorage.clear();
        }, 5000);
       

    }

    return (
        <Container fluid className='bg-dark variant-dark text-white  p-5 d-flex form1 justify-content-around vh-100'>



            <Row className='col-md-4'>

                <ListGroup className='mt-4'>


                    <img src={data.image} alt="" />
                    <p className='mt-3'>email:</p>
                    <ListGroupItem>{data.email}</ListGroupItem>
                    <p className='mt-3'>name:</p>
                    <ListGroupItem>{data.name}</ListGroupItem>
                    <p className='mt-3'>username:</p>
                    <ListGroupItem>{data.username}</ListGroupItem>


                    <Container className='mt-2'>
                        <Row>
                            <Button className="mt-5 " variant="primary">
                                <Link className='text-white' variant="primary" to={`/users/perfil/change/${params._id}`}>Cambiar Datos</Link>
                            </Button>
                            <Button className="mt-3 btn-danger " variant="primary" onClick={handleDelete}>
                                Eliminar Cuenta

                            </Button>
                            {dlt && <Alert variant='warning' className='mt-3'>{dlt}</Alert>}
                        </Row>
                    </Container>


                </ListGroup>


            </Row>
            <h1>Hola! {data.username} Este es tu perfil </h1>

        </Container>
    )
}

export default Perfil