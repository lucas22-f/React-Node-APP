import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card, CardGroup, Container,Row,Col } from 'react-bootstrap'

function Community() {
    const [data, setData] = useState([]);

    useEffect(() => {

        async function getData() {
            const res = await fetch("http://localhost:3001/users", { headers: { "Autorization": `${localStorage.getItem("JWT")}` } })
            const data = await res.json();
            setData(data);
        }

        getData();
        console.log(data)
    }, [])


    return (
        
            <CardGroup className='mt-3'>
               
                 <Row  md={4} className="g-4">
                {data.map((el)=>
                   
                        <Col>
                    <Card className='mx-2'>
                    <Card.Img variant="top" src={el.image} />
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>email: {el.email}</Card.Text>
                        <Card.Text>username: {el.username}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">id: {el.id}</small>
                    </Card.Footer>
                </Card>
                </Col>
               


                )}
                 </Row>
                 
                






            </CardGroup>
           
      
    )
}

export default Community