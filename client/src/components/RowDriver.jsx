import React from 'react'
import { Row, Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function RowDriver({ el }) {
  return (

    <Row className='border rounded pt-5 mt-5 shadow'>

      <div className='col-md-2 column'>
        <Card.Title>{el.name}</Card.Title>
        <Card.Img src={`${el.image}`} />
      </div>


      <div className='col-md-2 column'>
        <Card.Title>{el.car_name}</Card.Title>
        <Card.Img src={`${el.car_img}`} />
      </div>


      <div className="column col-md-6">
        <Card.Title>Presentacion</Card.Title>
        <Card.Text>{el.presentation}</Card.Text>
      </div>


      <div className="container d-flex justify-content-end">
        <p>driver _id: {el._id}</p>
      </div>


      <Container >
        <Link variant='dark' className='my-4 btn btn-dark' to={`/dashboard/${el._id}`}>Seleccionar</Link>
      </Container>

    </Row>

  )
}

export default RowDriver