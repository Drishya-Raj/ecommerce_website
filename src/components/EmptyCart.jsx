import React from 'react';
import emptycart from '../assets/images/emptycart.jpg';

function EmptyCart() {
    return (
        <div className='emptycart'>
            <h1>Cart is empty!
            </h1>
            
            <div className='image-container'>
                <img src={emptycart} alt="empty cart" />
            </div>
        </div>
    )
}

export default EmptyCart