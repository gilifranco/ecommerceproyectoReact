import React from 'react';
import './App.css';
import NavBoost from './NavBoost';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
      <NavBoost/>
        <Routes>
          <Route path='/' element={ <ItemListContainer  />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Error 404</h1>}></Route>
        </Routes>
    </BrowserRouter>
  
        
    );
  
}

export default App;
