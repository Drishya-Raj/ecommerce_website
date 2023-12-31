import React from "react";

const TextInput = ({type, onChange ,placeholder,value,icon,checked,min,max,style, className,onInput,onBlur, onClick}) => {

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
                    checked = {checked}
                    min={min}
                    max={max}
                    style={style}
                />
                
            </p>
        </div>
    )
}
export default TextInput;