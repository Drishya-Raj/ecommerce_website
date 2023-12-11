import { service } from "./constants/array";

const Services = () => {

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