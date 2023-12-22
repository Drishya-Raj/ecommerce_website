import React, { useState } from 'react';
import { FilterSidebar } from './filterSidebar';
import TextInput from '../textInput';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData } from '../../Redux/action';

const categories = [ 'Tablets', 'Mobile' , 'Laptops'];
const Mens = ["men's clothing", 'T-shirts', 'suites' ];
const features = ['Ring', 'Bangles', 'Necklace', 'Bracelet',];
const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items'];

const ListItem = () => {

    const data = useSelector(state => state.data);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [filter, setFilter] = useState(data);
    const dispatch = useDispatch();

    const filterProduct = (cat) => {
        const filterData = data.filter((item) => item.category === cat);
        setFilter(filterData);
        dispatch(setFilterData(filterData));
    }
   
    return (
        <div className='listItem'>
            <div className='flex'>
                <FilterSidebar title="Categories" options={categories} onOptionChange={() => filterProduct("electronics")} />
                <FilterSidebar title="Mens" options={Mens} onOptionChange={() => filterProduct("men's clothing")} />
                <FilterSidebar title="Jwellery" options={features}  onOptionChange={() => filterProduct("jewelery")}/>
                <FilterSidebar title="All Items" options={conditions} onOptionChange={()=>filterProduct(["men's clothing", "electronics", "jewelery"])}/>
                <h3>Price Range</h3>
                <div className='slider'>
                    <TextInput
                        type="range"
                        min={0}
                        max={100}
                        className="input"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value, 10), priceRange[1]])}
                    />
                    <TextInput
                        type="range"
                        min={0}
                        max={100}
                        className="input"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
                    />
                </div>
                <br />
                <div className='price-range'>
                    <span className="input">${priceRange[0]}</span>  - <span className="input">${priceRange[1]}</span>
                </div>
              
            </div>
        </div>
    );
};

export default ListItem;