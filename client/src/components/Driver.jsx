


import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Card } from 'react-bootstrap';


function Driver() {

  const [data, setData] = useState({});
  const params = useParams();
  const url = `http://localhost:3001/drivers/${params._id}`

  useEffect(() => {

    fetch(url, { headers: { "Authorization": `${localStorage.getItem("JWT")}` } })
      .then(res => res.json())
      .then(data => setData(data))
  }, []);



  return (
    <Row className='border rounded pt-5 mt-5 shadow'>

      <div className='col-md-2 column'>
        <Card.Title>{data.name}</Card.Title>
        <Card.Img src={`${data.image}`} />
      </div>


      <div className='col-md-2 column'>
        <Card.Title>{data.car_name}</Card.Title>
        <Card.Img src={`${data.car_img}`} />
      </div>


      <div className="column col-md-6">
        <Card.Title>Presentacion</Card.Title>
        <Card.Text>{data.presentation}</Card.Text>
      </div>


      <div className="container d-flex justify-content-end">
        <p>driver _id: {data._id}</p>
      </div>


    </Row>

  )
}

export default Driver