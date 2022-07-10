
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import img from "../assets/img/logo1.png"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import Perfil from './Perfil';
import { useEffect } from 'react';
function NavIndex() {
    const user = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
      async function getData() {
       

        const res = await fetch(
          `http://localhost:3001/users/perfil/${localStorage.getItem("_id")}`,
          { headers: { "Authorization": `${localStorage.getItem("JWT")}` } }
        );
        if (res.status === 403) {
          navigate("/");
          localStorage.clear();
        }
      }
      getData();
    }, []);

    const _id = localStorage.getItem("_id");
    
    
    const handleSalir =()=>{
        localStorage.clear();
        navigate("/");

    }
   

    return (
        <Navbar className='bg-black' expand="sm" variant='dark' sticky='top'>

            <Navbar.Brand>
                <div className='d-flex align-items-center'>
                    <Link to="/"><img className='mx-3' src={img} style={{ width: "5em", height: "5em" }} alt="img" />  {/* estilos en linea que quitaremos mas tarde */}</Link>
                    <Link to="/" className='text-white nav-link'>Buen viaje.com</Link>
                </div>
            </Navbar.Brand>

            <Navbar.Toggle className='mx-2'></Navbar.Toggle>

            <Navbar.Collapse className='justify-content-end'>

                <Nav className='p-3' >
                  
                    {!user &&<Link to="/users/login" className='p-2 btn bg-dark text-white nav-link m-1'> Iniciar sesion </Link>}
                    {!user &&<Link to="/users/register" className='btn btn-dark text-danger m-1' > Registrate</Link>}
                    {user && <Link className=' btn btn-info text-black nav-link m-1' to="/dashboard">Dashboard</Link>}
                    {user && <Link className=' btn btn-info text-black nav-link m-1' to={`/users/perfil/${_id}`} element={<Perfil></Perfil>}>Mi Perfil</Link>}
                    {user && <Link className='btn btn-info text-black nav-link m-1' to={"/users/comunidad"}>Comunidad</Link>}
                    {user && <Link className='btn btn-danger text-black nav-link m-1' to="" onClick={handleSalir}>Salir</Link>}
                    

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

export default NavIndex