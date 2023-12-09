import { useState } from "react";
export const FilterSidebar = ({ title, className, options, selectedOptions, onOptionChange, }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="floats">
                <h3 onClick={handleToggle}>
                    {title} <span>{isOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
                </h3>
                {isOpen && (
                    <ul>
                        {options.map((option) => (
                            <li key={option}>
                                <input
                                    type="checkbox"
                                    id={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => onOptionChange(option)}
                                />
                                <label htmlFor={option}>{option}</label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>

    );
};