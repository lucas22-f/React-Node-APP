import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import NavIndex from './components/NavIndex'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard';
import PrivateRoutes from './components/PrivateRoutes';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Perfil from './components/Perfil';
import Change from './components/Change';
import RowDriver from './components/RowDriver';
import Driver from './components/Driver';
import Community from './components/Community';
import OneCommunity from './components/OneCommunity';

function App() {

  return (
    <Router>

      <NavIndex></NavIndex>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<DashBoard></DashBoard>} ></Route>
          <Route path='/users/perfil/:_id' element={<Perfil></Perfil>}></Route>
          <Route path='/users/perfil/change/:_id' element={<Change></Change>}></Route>
          <Route path='/dashboard/:_id' element={<Driver></Driver>}></Route>
          <Route path='/users/comunidad' element={<Community></Community>}></Route>
          <Route path='/users/comunidad/:_id' element={<OneCommunity></OneCommunity>}></Route>
        </Route>
        <Route path='/users/forgot' element={<Forgot></Forgot>}></Route>
        <Route path='/users/reset/:token' element={<Reset></Reset>}></Route>
        <Route path='/users' element={<Login></Login>}></Route>
        <Route path='/users/login' element={<Login></Login>}></Route>
        <Route path='/users/register' element={<Register></Register>}></Route>

      </Routes>

    </Router>

  )
}

export default App
