import { useEffect, useState } from 'react';
import { itemsofSix } from './constants/array';
import { Link } from 'react-router-dom';
import { fetchData } from './api';
import { useSelector } from 'react-redux';



const SectionSix = () => {
    const [data, setData] = useState([]);
   
   
    const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products?limit=15');
          const apidata = await response.json();
          setData(apidata);
        } catch (error) {
          console.error('Error fetching Data', error);
        }
      };
      useEffect(() => {
        fetchData();
    }, [fetchData])
    
    
    return (
        <div className="sectionSix">
            <h3>Recommended items</h3>
            <ul>
                {data?.map((item) => (
                    <Link key={item.id} to='/productDetails'>
                        <li className="cartItems" key={item} >
                            <div className='imgcontainer'>
                                <img src={item?.image} alt="images" />
                            </div>
                            <h4>{item.price}</h4>
                            <p>{item.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
export default SectionSix;