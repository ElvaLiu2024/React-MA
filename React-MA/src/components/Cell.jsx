import React, { useState ,useEffect } from 'react';
import { useGrid } from '../context/Context';

const Cell = () => {
    const [isActive, setIsActive] = useState(false);

    const {toggleCell} = useGrid();

    const handleClick = () => {
         setIsActive((prevState) => !prevState);
    };

    useEffect(() => {
        toggleCell(isActive);
    }
    , [isActive]);

    return (
        <div 
        onClick = {handleClick}
        style={{
            width: "100px",
            height: "100px",
            border: "1px solid grey",
            backgroundColor: isActive ? "black" : "white",
            display: "inline-block",
        }}
        >
            
        </div>);
}

export default Cell;