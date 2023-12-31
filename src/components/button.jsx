import React from 'react';
import '../assets/css/index.scss';

const Button = ({ value, className , onClick}) => {

    return (
        <button className={className} onClick={onClick} >{value} </button>
    )

}
export default Button;