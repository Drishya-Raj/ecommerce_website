import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchDataSuccess } from "../../Redux/action";

const AsideItems = () => {
    const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSuccess(data));
  },[dispatch])

    return (
        <div className="aside">
            <ul>
                <h4>You may like</h4>
                {data?.map((item) => {
                    const { id, image, title, price } = item;
                    return (
                        <li key={id}>
                            <div className="img-container ">
                                <img src={image} alt="images" />
                            </div>
                            <div className='text'>
                                <p id="ptext">{title}</p>
                                <p id="itext">{price}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AsideItems;