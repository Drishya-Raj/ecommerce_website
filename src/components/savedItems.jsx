// import * as images from './images';

// const SavedItems = () => {
//     const save = [
//         {
//             image: images?. mobile1,
//             price: '$99.50',
//             text: 'GoPro HERO6 4K Action Camera - Black',
//             button: 'Move to cart'
//         },
//         {
//             image: images?.mobile2,
//             price: '$99.50',
//             text: 'GoPro HERO6 4K Action Camera - Black',
//             button: 'Move to cart'
//         },
//         {
//             image: images?.watch,
//             price: '$99.50',
//             text: 'GoPro HERO6 4K Action Camera - Black',
//             button: 'Move to cart'
//         },
//         {
//             image: images?.laptop,
//             price: '$99.50',
//             text: 'GoPro HERO6 4K Action Camera - Black',
//             button: 'Move to cart'
//         }
//     ]
//  console.log(".............",save);
//     return (
//         <div className="savedItem">
//             <ul>
//                 {save.map((item,index) => (
//                     <li key={index}>
//                         <div className='imgcontainer'>
//                             <img src={item.image} alt="images" />
//                         </div>
//                         <div className='content'>
//                             <h4>{item.price}</h4>
//                             <p>{item.text}</p>
//                             <button>
//                             <i class="fa-solid fa-cart-shopping"></i>{item.button}
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default SavedItems;