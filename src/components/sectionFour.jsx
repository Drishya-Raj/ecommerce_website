import Button from './button';
import { itemImages } from './constants/array';
import * as images from './images';

const SectionFour = () => {
    return (
        <div className="sectionfour">
            <div className="fourleft">
                <div className="img-container">
                    <img src={images?.bg1} alt="bg" />
                </div>
                <h4>Consumer electronics and gadgets</h4>
                <Button className="sourcebutton2" value="Source now"/>
            </div>
            <div className="section">
                <ul className="grid-container">
                    {itemImages.map((item) => (
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