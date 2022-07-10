import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../styles/Homestyle.css"

import c1 from "../assets/img/c1.jpg"
import c2 from "../assets/img/c2.jpg"
import c3 from "../assets/img/c3.jpg"
import c4 from "../assets/img/c4.png"
import c5 from "../assets/img/c5.jpg"
import b1 from "../assets/img/b1.jpg"
import b2 from "../assets/img/b2.jpg"
import b3 from "../assets/img/b3.jpg"
import b4 from "../assets/img/b4.jpg"
import { Card, Row } from 'react-bootstrap'
import Footer from './Footer'

function Home() {
    return (
        <>
            <section className="header">
                <div className="text-box">
                    <h1>Buen Viaje.com</h1>
                    <h5>Una plataforma donde podes adquirir un servicio a medida y de primera calidad! </h5>
                    <Link to="/users/login">Iniciar Sesion</Link>
                </div>
            </section>

            <section className="cards-info">
                <h1>Brindamos Viajes Personalizados</h1>
                <p>Tenemos los mejores precios y los choferes con mas alta recomendacion</p>
                <Row>
                    <div className='col-md-4 column d-flex flex-column justify-content-center'>
                        <h3>A disposición del Cliente</h3>
                        <Card.Img src={c4}></Card.Img>
                    </div>
                    <div className="column col-md-6">
                        <h3>La mejor Calidad</h3>
                        <Card.Img src={c5}></Card.Img>
                    </div>
                </Row>
            </section>


            <section className="img-info container-fluid">
                <h1>Brindamos la mejor calidad</h1>
                <p>Contamos con los mejores rodados</p>
                <div className="row">

                    <div className="img-info-col">
                        <img src={b4} alt="banner-img" />
                        <div className="layer">
                            <h3>Servicio</h3>
                        </div>
                    </div>
                    <div className="img-info-col">
                        <img src={b1} alt="banner-img" />
                        <div className="layer">
                            <h3>Calidad</h3>
                        </div>
                    </div>
                    <div className="img-info-col">
                        <img src={b2} alt="banner-img" />
                        <div className="layer">
                            <h3>Constancia</h3>
                        </div>
                    </div>
                    <div className="img-info-col">
                        <img src={b3} alt="banner-img" />
                        <div className="layer">
                            <h3>Trayectoria</h3>
                        </div>
                    </div>



                </div>

            </section>

            <section className="anoter ">
                <h1>Brindamos Personal de Calidad</h1>
                <p>Los choferes mas valorados del mercado </p>
                <div className="row">
                    <div className="anoter-col">
                        <img src={c1} alt="c1" />
                        <h3 className='my-2'>Responsabilidad</h3>
                        <p>lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="anoter-col">
                        <img src={c2} alt="c2" />
                        <h3 className='my-2'>Confianza</h3>
                        <p>lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="anoter-col">
                        <img src={c3} alt="c3" />
                        <h3 className='my-2'>Seguridad</h3>
                        <p>lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>

                </div>

            </section>

            <Footer></Footer>


            <Outlet></Outlet>
        </>
    )
}

export default Home