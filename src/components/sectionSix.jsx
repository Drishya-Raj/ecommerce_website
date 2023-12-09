
import * as images from './images';
import { Link } from 'react-router-dom';


const SectionSix = () => {

    const items = [
        {
            id:1,
            image: images?.tshirt,
            price: '$10.30',
            text: 'T-shirts with multiple colors, for men'
        },
        {
            id:2,
            image: images?.suite,
            price: '$10.30',
            text: 'Jeans shorts for men'
        },
        {
            id:3,
            image: images?.coat,
            price: '$12.50',
            text: 'Brown winter coat'
        },
        {
            id:4,
            image: images?.mensWallet,
            price: '$30.00',
            text: 'Jeans bag for travel for men'
        },
        {
            id:5,
            image: images?.bag,
            price: '$99.0',
            text: 'Leather wallet'
        },
        {
            id:6,
            image: images?.trousers,
            price: '$9.99',
            text: 'Canon camera black, 100x zoom'
        },
        {
            id:7,
            image: images?.whiteheadsets,
            price: '$8.99',
            text: 'Headset for gaming with mic'
        },
        {
            id:8,
            image: images?.bag,
            price: '$10.30',
            text: 'Smartwatch silver color modern'

        },
        {
            id:9,
            image: images?.pot,
            price: '$10.5',
            text: 'Blue wallet for men leather metarfial'
        },
        {
            id:10,
            image: images?.jug,
            price: '$80.95',
            text: 'Jeans bag for travel for men',
            link:"/productDetails"
        }
    ]

    return (
        <div className="sectionSix">
            <h3>Recommended items</h3>
            <ul>
                {items.map((item) => (
                    <Link key={item.id} to={item.link}>
                        <li className="cartItems" key={item} >
                            <div className='imgcontainer'>
                                <img src={item.image} alt="images" />
                            </div>
                            <h4>{item.price}</h4>
                            <p>{item.text}</p>
                        </li>
                        </Link>
                ))}
            </ul>
        </div>
    )
}
export default SectionSix;