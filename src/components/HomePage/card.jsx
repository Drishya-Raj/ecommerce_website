import React from 'react'

function Card({ price, title, image }) {
    return (
        <li className="cartItems">
            <div className='imgcontainer'>
                <img src={image} alt="images" />
            </div>
            <h4>Price : $ {price}</h4>
            <p>{title}</p>
        </li>
    )
}

export default Card