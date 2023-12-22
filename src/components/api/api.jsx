import { useEffect, useState } from "react";
import { fetchDataSuccess } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const ApiComponent = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState();

    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products?limit=15')
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
    }
    dispatch(fetchDataSuccess(data));
    useEffect(() => {
        fetchData();
    }, [fetchData])
}
export default ApiComponent