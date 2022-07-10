

import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card,Col,Row } from 'react-bootstrap';


function OneCommunity() {
    const [data, setData] = useState({});
    const params = useParams();
    const url = `http://localhost:3001/users/perfil/${params._id}`

    useEffect(() => {
        async function getData() {
            const res = await fetch(url, { headers: { "Authorization": `${localStorage.getItem("JWT")}` } });
            const data = await res.json();
            setData(data);
        }
        getData();


    }, [])

    console.log(data);

    return (
        <Row className='mt-4'>
        <Col xs md="4">
        <Card className='mx-2'>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>email: {data.email}</Card.Text>
                <Card.Text>username: {data.username}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">id: {data._id}</small>
            </Card.Footer>
        </Card>
        </Col>
        </Row>
    )
}

export default OneCommunity