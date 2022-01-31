import React from 'react';
import "./Static/Button.css"

export const Button = ({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    return (
        <button onClick = {onClick} type = {type}>
            {children}
        </button> 
    )
}
