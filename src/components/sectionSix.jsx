import { itemsofSix } from './constants/array';
import { Link } from 'react-router-dom';


const SectionSix = () => {

    return (
        <div className="sectionSix">
            <h3>Recommended items</h3>
            <ul>
                {itemsofSix.map((item) => (
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