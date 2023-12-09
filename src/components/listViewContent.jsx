import * as images from './images';
import React, { useState } from 'react';
import { lists } from './constants/array';
import { Products } from './constants/array';


const getItemDetails = (productId) => {
    return Products.find(item => item.id === productId);
};

const ListViewContent = () => {
    
    const [favorites, setFavorites] = useState([]);
    console.log("favorites", favorites);

    const toggleFavorite = (productId) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(productId)) {
                // Remove the productId from favorites
                const updatedFavorites = prevFavorites.filter(id => id !== productId);
                console.log("Removed from favorites:", getItemDetails(productId));
                console.log("updatedfavorites", updatedFavorites);
            
                return updatedFavorites;
            } else {
                // Add the productId to favorites
                const updatedFavorites = [...prevFavorites, productId];
                console.log("Added to favorites:", getItemDetails(productId));
                console.log("updatedfavorites", updatedFavorites);
                return updatedFavorites;
            }
        });
    };

  


    return (
        <div className='filter'>
            <div className="listviewcontent">
                <ul>
                    {lists.map((item) => (
                        <li key={item.id}>
                            <div className='imgContainer'>
                                <img src={item.image} alt="images" />
                            </div>
                            <div className='content'>
                                <div className='items'>
                                    <p id="content">{item.content}</p>
                                    <div className='price'>
                                        <h4>{item.price}</h4>
                                        <h5>{item.oldprice}</h5>
                                    </div>
                                    <div className='rating'>
                                        <img src={item.stars} alt="rating" className='star' />
                                        <p id="number">{item.number}</p>
                                        <img src={images.dot} alt="dot" />
                                        <p id="order">{item.order}</p>
                                        <img src={item.dots} alt="dot" />
                                        <p id="text1">{item.text1}</p>
                                    </div>
                                    <p id="text2">{item.text2}</p>
                                    <p id="link">{item.link}</p>
                                </div>
                                <span onClick={() => toggleFavorite(item.id)}>
                                    {favorites.includes(item.id) ? (
                                        <>
                                            <img src={item.favorite} alt="fav" className='fav' />
                                        </>
                                    ) : (
                                        <img src={item.wishlist} alt="icon" className='fav' />
                                    )}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListViewContent;

