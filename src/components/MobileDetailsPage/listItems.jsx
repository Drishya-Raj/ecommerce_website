import React, { useState } from 'react';
import { FilterSidebar } from './filterSidebar';
import TextInput from '../textInput';
import { items } from '../constants/array';

const categories = ['Mobile Accessory', 'Electronics', 'Modern tech', 'Smartphones'];
const brands = ['Samsung', 'Apple', 'Huwaei', 'Poco', 'Lenovo'];
const features = ['Metallic', 'Plastic Cover', '8 GB Ram', 'Super Power', 'Large Memory'];
const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items'];

const ListItem = () => {
   
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState([]);

    const filteredItems = items.filter((item) => {
        const categoryCondition = selectedCategories.length === 0 || selectedCategories.includes(item.category);
        const brandCondition = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const priceCondition = item.price >= priceRange[0] && item.price <= priceRange[1];
        const featureCondition = selectedFeatures.length === 0 || selectedFeatures.includes(item.feature);
        const conditionofProduct = selectedCondition.length === 0 || selectedCondition.includes(item.condition);

        return categoryCondition && brandCondition && priceCondition && featureCondition && conditionofProduct;
    });

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handleFeatureChange = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
        }
        else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    }
    const handleConditionChange = (condition) => {
        if (selectedCondition.includes(condition)) {
            setSelectedCondition(selectedCondition.filter((c) => c !== condition))
        }
        else {
            setSelectedCondition([...selectedCondition, condition]);
        }
    }


    return (

        <div className='listItem'>
            <div className='flex'>
                <FilterSidebar
                    title="Categories"
                    options={categories}
                    selectedOptions={selectedCategories}
                    onOptionChange={handleCategoryChange}
                />

                <FilterSidebar
                    title="Brands"
                    options={brands}
                    selectedOptions={selectedBrands}
                    onOptionChange={handleBrandChange}
                />
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
                 
                    <span  className="input">${priceRange[0]}</span>  - <span  className="input">${priceRange[1]}</span>
                </div>
                <FilterSidebar
                    title="Features"
                    options={features}
                    selectedOptions={selectedBrands}
                    onOptionChange={handleFeatureChange}

                />
                <FilterSidebar
                    title="Condition"
                    options={conditions}
                    selectedOptions={selectedCondition}
                    onOptionChange={handleConditionChange}
                />
            </div>
            <ul className='filter'>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        {item.category} - {item.brand} - ${item.price} -{item.feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListItem;