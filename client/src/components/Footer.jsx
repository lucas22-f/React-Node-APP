import React from 'react'
import {Container,Row} from "react-bootstrap"
function Footer() {
  return (
    <div className="footer-dark mt-3">
        <footer>
            <Container>
                <Row>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Reserva tu viaje</a></li>
                            <li><a href="#">Inicia sesion</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Acerca de</h3>
                        <ul>
                            <li><a href="#">Buen Viaje</a></li>
                            <li><a href="#">Equipo</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Buen Viaje.com</h3>
                        <p>Buen Viaje.com una pagina ideal para que solicites el servicio a medida de viajes con choferes personalizado.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook-outline"></i></a><a href="#"><i className="icon ion-social-twitter-outline"></i></a><a href="#"><i className="icon ion-social-whatsapp-outline"></i></a><a href="#"><i className="icon ion-social-instagram-outline"></i></a></div>
                </Row>
                <p className="copyright">Lucas Figueroa © 2022</p>
            </Container>
        </footer>
    </div>
  )
}

export default Footer