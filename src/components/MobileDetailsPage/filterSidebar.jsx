import { useState } from "react";
export const FilterSidebar = ({ title, className, options, selectedOptions,checked,onClick, onOptionChange, }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="floats">
                <div className="floats1">
                    <h3 >{title}</h3>
                    <p onClick={handleToggle}>{isOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</p>
                </div>
                {isOpen && (
                    <ul>
                        {options.map((option) => (
                            <li key={option}>
                                <input
                                    type="checkbox"
                                    id={option}
                                    onChange={() => onOptionChange(option)}
                                    checked={checked}
                                    
                                />
                                <p>{option}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};