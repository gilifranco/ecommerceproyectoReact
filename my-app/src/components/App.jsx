import React from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBoost from './NavBoost';
const App = () => {
    const saludo = 'Bienvenidos!'
    return (
        <BrowserRouter>
      <NavBoost/>
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo={saludo} />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  
        
    );
  
}

export default App;
