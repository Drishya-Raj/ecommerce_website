import Button from './button';
import bg1 from '../assets/images/pinkmob-bg.png';
import React from 'react';
import smartwatch from '../assets/images/watch.png';
import cameras from '../assets/images/camera.png';
import headphone from '../assets/images/whiteheadPhones.png';
import jug from '../assets/images/jug.png';
import headset from '../assets/images/headset.png';
import laptop from '../assets/images/laptop.png';
import smartphone from '../assets/images/smartphone.png';
import mobphone from '../assets/images/1.png';

const SectionFour = () => {
    const images = [
        {
            id:1,
            text: 'Smart Watches',
            price: 'From USD 19',
            image: smartwatch
        },
        {
            id:2,
            text: 'Camera',
            price: 'From USD 89',
            image: cameras
        },
        {
            id:3,
            text: 'HeadPhones',
            price: 'From USD 10',
            image: headphone
        },
        {
            id:4,
            text: 'Smart Watches',
            price: 'From USD 90',
            image: jug
        },

        {
            id:5,
            text: 'Gaming set',
            price: 'From USD 35',
            image: headset
        },
        {
            id:6,
            text: 'Laptops & PC',
            price: 'From USD 340',
            image: laptop
        },
        {
            id:7,
            text: 'Smartphones',
            price: 'From USD 19',
            image: smartphone
        },
        {
            id:8,
            text: 'Electric kattle',
            price: 'From USD240',
            image: mobphone

        }
    ];

    return (
        <div className="sectionfour">
            <div className="fourleft">
                <div className="img-container">
                    <img src={bg1} alt="bg" />
                </div>
                <h4>Consumer electronics and gadgets</h4>
                <Button className="sourcebutton2" value="Source now"/>
            </div>
            <div className="section">
                <ul className="grid-container">
                    {images.map((item) => (
                        <li key={item.id} className='grid-items'>
                            <h4>{item.text}</h4>
                            <p>{item.price}</p>
                            <div className='img-container'>
                                <img src={item.image} alt="items" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SectionFour;