import './App.css';
import ItemListContainer from './ItemListContainer';
import NavBoost from './NavBoost';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './Cart';
import {CartProvider} from '../context/CartContext'

const App = () => {
    return (
  <CartProvider>
        <BrowserRouter>
      <NavBoost/>
        <Routes>
          <Route path='/' element={ <ItemListContainer  />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Error 404</h1>}></Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
        
    );
  
}

export default App;
