// import * as images from '../images';
// import { supplier } from '../constants/array';
// import Button from '../button';
// import { priceDetails } from '../constants/array';
// import { tableDetails } from '../constants/array';
// import { reviews } from '../constants/array';
// import { imageItems } from '../constants/array';

// const MensClothing = () => {
//     return (

//         <div className="Mens">
//             <div className="tshirt">
//                 <div className="imgContainer">
//                     <img src={images?.tshirts} alt="image34" />
//                 </div>
//                 <div className="parts">
//                     {imageItems?.map((item) => {
//                         const { key, image } = item;
//                         return (
//                             <img key={key} src={image} alt="images" />);
//                     })}
//                 </div>
//             </div>
//             <div className="info">
//                 <p>
//                     <img src={images?.tick} alt="check" /> In stock
//                 </p>
//                 <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
//                 <div className='middle'>
//                     <div className="rating">
//                         {reviews.map((item) => {
//                             const { id, image, text } = item;
//                             return (
//                                 <div key={id}>
//                                     <img src={image} alt="images" />
//                                     <p>{text}</p>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                     <div className="trade">
//                         {priceDetails.map((item) => {
//                             const { key, price, pieces } = item;
//                             return (<div className='price' key={key}>
//                                 <h3>{price}</h3>
//                                 <p>{pieces}</p>
//                             </div>)
//                         })}
//                     </div>
//                     <div className="grid-items">
//                         {tableDetails.map((item) => {
//                             const { id, text } = item;
//                             return (
//                                 <p key={id}>{text}</p>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div className="right-section">
//                 <div className="right">
//                     <div className="seller-details">
//                         <img src={images?.rimg} alt="rimg" className="rimg" />
//                         <div className="sellers">
//                             <p>Supplier</p>
//                             <p> Guanjoi Trading LLC</p>
//                         </div>
//                     </div>
//                     {supplier?.map((item) => {
//                         const { id, image, text } = item;
//                         return (
//                             <div key={id}>
//                                 <img src={image} alt="germany" />
//                                 <p>{text}</p>
//                             </div>
//                         )
//                     })}
//                     <div className="send">
//                         <Button value="Send Enquiry" />
//                     </div>
//                     <div className="selers">
//                         <Button value="Seller's Profile" />
//                     </div>
//                 </div>
//                 <div className="save">
//                     <img src={images?.fav} alt="fav" />
//                     <h3> Save for later</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default MensClothing;