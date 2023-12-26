import React, { useEffect, useState } from 'react';
import { FilterSidebar } from './filterSidebar';
import TextInput from '../textInput';
import Button from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData } from '../../Redux/action';
import { categories, Mens, features, conditions } from '../constants/array';
import EmptyCart from '../CartPage/EmptyCart';

const ListItem = () => {
    const data = useSelector(state => state.data);
    const [minimun, setMinimum] = useState(15);
    const [maximum, setMaximum] = useState(180);
    const [filter, setFilter] = useState(data);

    let filterData = data;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFilterData(filterData))
    }, [dispatch]);

    const filterProduct = (cat) => {
    
        filterData = data.filter((item) => (item.category === cat));
        setFilter(filterData);
        dispatch(setFilterData(filterData));
    }

    const applyPriceFilter = () => {
        const filteredData = data.filter((item) => item.price >= minimun && item.price <= maximum);
        setFilterData(filteredData);
        dispatch(setFilterData(filteredData));
    };
   
    const filteringArray = [
        { id: 1, title: "Categories", options: categories ,onOptionChange: () => filterProduct("electronics") },
        { id: 2, title: "Mens", options: Mens, onOptionChange: () => filterProduct("men's clothing") },
        { id: 3, title: "Jwellery", options: features, onOptionChange: () => filterProduct("jewelery") },
        { id: 2, title: "All Items", options: conditions, onOptionChange: () => filterProduct(["men's clothing", "electronics", "jewelery"]) },
    ]

    return (
        <div className='listItem'>
            <div className='flex'>
                {filteringArray?.map((item) => {
                    const { title, options, onOptionChange,checked } = item;
                    return (<FilterSidebar title={title} options={options} onOptionChange={onOptionChange}  />)
                })}
                <h3>Price Range</h3>
                <div className='slider'>
                    <TextInput type="range" min={0} max={600} className="inputmin" value={minimun} onChange={(e) => setMinimum(e.target.value)} />
                    <TextInput type="range" min={0} max={999} className="inputmax" value={maximum} onChange={(e) => setMaximum(e.target.value)} />
                </div>
                <br />
                <div className='price-range'>
                    <span className="input">${minimun}</span>  - <span className="input">${maximum}</span>
                    <Button onClick={applyPriceFilter} value="APPLY" className='apply' />
                </div>
            </div>
        </div>
    );
};

export default ListItem;