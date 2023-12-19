import Button from "../button"

const Offers = ({bannerImage,data,title})  =>{
    
        return (
            <div className="sectionthre">
            <div className="threeRight">
              <div className="img-container">
                <img src={bannerImage} alt="background" />
              </div>
              <h4>{title}</h4>
              <Button className="sourcebutton" value="Source now" />
            </div>
            <div className="sectionThree">
              <ul className="grid-container">
                {data?.map((item) => {
                  const { id, text, price, image } = item;
                  return (
                    <li key={id} className='grid-items'>
                      <h4>{text}</h4>
                      <p>{price}</p>
                      <div className="img_container">
                      <img src={image} alt="items" />
                      </div>
                    </li>
                  )})}
              </ul>
            </div>
          </div>
    
        )
    }
export default Offers;