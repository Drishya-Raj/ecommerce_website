import React,{useEffect} from "react";
import Button from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess } from "../../Redux/action";

const Offers = ({bannerImage,title})  =>{
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchDataSuccess(data));
  }, [dispatch])
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
                {data?.map((item,index) => {
                  const { id, category, price, image } = item;
                  return (index < 9 && index >= 1) && (
                    <li key={id} className='grid-items'>
                      <h4>{category}</h4>
                      <p>From USD {price}</p>
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