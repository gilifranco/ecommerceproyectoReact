import React from 'react';
import { ImCart } from 'react-icons/im';
import { useCart } from '../context/CartContext';

 const Cartwidget = () => {
    const{cartQuantity} =useCart()
    return (
        <>
            < ImCart size='2rem' color='black' padding='25px' />  
            <span>{cartQuantity() || ''}</span>
        </>
    );
}

export default Cartwidget;
