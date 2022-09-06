import React from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBoost from './NavBoost';
const App = () => {
    return (
        <BrowserRouter>
      <NavBoost/>
        <Routes>
          <Route path='/' element={ <ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  
        
    );
  
}

export default App;
