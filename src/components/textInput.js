import React from "react";

const TextInput = (props) => {

    const{type, onChange ,placeholder,value,icon, className,onInput,onBlur, onClick} = props;
    return (
        <div className="textInput">
            <p className="inputContainer">
               
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value ={value}
                    className={className}
                    onClick={onClick}
                    onInput={onInput}
                    icon={icon}
                    onBlur={onBlur}
                />
                
            </p>
        </div>
    )
}
export default TextInput;