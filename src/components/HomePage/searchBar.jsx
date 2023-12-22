import React, { useState } from "react";
import TextInput from "../textInput";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
  
    return (
        <TextInput
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput} 
            className="search"/>
    );
}
export default SearchBar;