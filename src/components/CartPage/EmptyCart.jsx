import React from 'react';
import { emptycart } from '../images';

function EmptyCart() {
    return (
        <div className='emptycart'>
            <h1>Your Cart is empty  </h1>
            <div className='image-container'>
                <img src={emptycart} alt="empty cart" />
            </div>
        </div>
    )
}

export default EmptyCart