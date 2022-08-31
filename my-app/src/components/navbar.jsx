import './App.css';
import React from 'react';
import Form from './Form';
import Cartwidget from './Cartwidget';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HairDis</a>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
      </ul>
        <Form contenBuscar="Productos"/>
    </div>
    <>
      <Cartwidget/>
    </>
  </div>
</nav>
    </>
  );
}

export default Navbar;
