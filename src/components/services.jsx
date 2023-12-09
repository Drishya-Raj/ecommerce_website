import * as images from './images';

const Services = () => {

    const service = [
        {
            id:1,
            image1: images?.industry,
            image2: images?.search,
            text: 'Source from Industry Hubs'
        },
        {
            id:2,
            image1: images?.rainbow,
            image2: images?.bucket,
            text: 'Customize Your Products'
        },
        {
            id:3,
            image1: images?.aeroplane,
            image2: images?.send,
            text: 'Fast, reliable shipping by ocean or air'
        },
        {
            id:4,
            image1:images?. workers,
            image2: images?.security,
            text: 'Product monitoring and inspection'
        }
    ]
    return (
        <div className='services'>
            <h2>Our extra services</h2>
            <div className="subsection">
                <ul className="container">
                    {service?.map((item) => (
                        <li key={item.id}>
                            <div className='contain'>
                                <img src={item?.image1} alt="workers" className='images' />
                            </div>
                            <p>{item?.text}</p>
                            <img src={item?.image2} alt="icon" className='icon'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Services;