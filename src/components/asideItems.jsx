import * as images from './images';
const AsideItems = () => {

    const aside = [
        {
            id:1,
            image: images?.coat,
            text: 'Men Blazers Sets Elegant Formal',
            price: '$7.00 - $99.50'
        },
        {
            id:2,
            image: images?.tshirt,
            text: 'Men Shirt Sleeve Polo Contrast',
            price: '$7.00 - $99.50'

        },
        {
            id:3,
            image: images?.suite,
            text: 'Apple Watch Series Space Gray',
            price: '$7.00 - $99.50'
        },
        {
            id:4,
            image: images?.blue,
            text: 'Basketball Crew Socks Long Stuff',
            price: '$7.00 - $99.50'
        },
        {
            id:5,
            image: images?.bag,
            text: 'New Summer Mens castrol T-Shirts',
            price: '$7.00 - $99.50'

        }
    ]

    return (
        <div className="aside">
            <ul>
                <h4>You may like</h4>
                {aside?.map((item) =>
                    <li key={item.id}>
                        <div className="img-container ">
                            <img src={item?.image} alt="images" />
                        </div>
                        <div className='text'>
                            <p id="ptext">{item.text}</p>
                            <p id="itext">{item.price}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default AsideItems;