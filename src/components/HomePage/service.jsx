import React from "react"
const Service = ({image1, id,text, image2}) => {

    return(
        <li key={id}>
        <div className='contain'>
            <img src={image1} alt="workers" className='images' />
        </div>
        <p>{text}</p>
        <img src={image2} alt="icon" className='icon'/>
    </li>
    )
}
export default Service;