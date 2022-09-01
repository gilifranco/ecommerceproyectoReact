import React from 'react';
import './App.css';
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
const App = () => {
    return (
        <>
            <Navbar />
        <ItemListContainer saludo="Bienvenido a mi ecommerce"/>
        </>
    );
  
}

export default App;
