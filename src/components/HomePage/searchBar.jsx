import React, { useState } from "react";
import TextInput from "../textInput";
import Button from "../button";
import { searchItems } from "../constants/array";

const SearchBar = () => {
   
    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState(searchItems);
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        const filteredSearchItems = searchItems.filter((obj) => (obj.items.toLowerCase().includes(searchTerm.toLowerCase())));
        setFilter(filteredSearchItems);
    }
    return (
        <div className="search">
            <div className='search-items'>
                <TextInput
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                    value={searchInput}
                    className="search" />

                <div className='input'>
                    <div className="dropdown">
                        <label htmlFor="all">All category</label>
                        <select name="type">
                            <option value="mensclothing"></option>
                        </select>
                    </div>
                    <Button className="searchbutton" value="Search" onC />
                </div>
            </div>
            <ul>
                {searchInput &&
                    filter.map((elements) => {
                        return (<li key={elements.id}>{elements.items}</li>)
                    })}
            </ul>
        </div>

    );
}
export default SearchBar;