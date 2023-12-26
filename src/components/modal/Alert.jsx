import React, { useState } from "react";
export const Alert = ({ message }) => {
    // const [open, setOpen] = useState(true);

    // if (open)

        return (
            <div className="alert">
                <div className="alert-container">
                    <div className="symbol">
                    </div>
                    <div className="description">
                        <span className="title">{message.title}</span>
                        <span className="text">{message.text}</span>
                        {/* <a className="symbol-close" onClick={() => setOpen(false)}>
                            <i className="fa-solid fa-xmark " ></i>
                        </a> */}
                    </div>
                </div>
            </div>
        );
};