// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { Products } from './constants/products';

// const FavoriteContext = createContext();

// export const FavoriteProvider = ({ children }) => {
//   const getItemDetails = (productId) => {
//     return Products.find(item => item.id === productId);
//   };

// //   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   const [favorites, setFavorites] = useState([]);


//   const toggleFavorite = (productId) => {
//     setFavorites(prevFavorites => {
//       const existingItem = prevFavorites.find(item => item.id === productId);

//       if (existingItem) {
//         // Remove the item from favorites
//         const updatedFavorites = prevFavorites.filter(item => item.id !== productId);
//         // saveFavoritesToLocalStorage(updatedFavorites);
//         return updatedFavorites;
//       } else {
//         // Add the item to favorites
//         const newItem = getItemDetails(productId);
//         const updatedFavorites = [...prevFavorites, newItem];
//         // saveFavoritesToLocalStorage(updatedFavorites);
//         return updatedFavorites;
//       }
//     });
//   }

// //   const saveFavoritesToLocalStorage = (favorites) => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   };

//   return (
//     <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export const useFavorite = () => {
//   return useContext(FavoriteContext);
// };
