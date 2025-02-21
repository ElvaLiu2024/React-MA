import React,{createContext, useContext, useState} from "react";

const GridContext = createContext(null); 

export const ContextProvider = ({children}) => {

    const [activeCells, setActiveCells] = useState(0);

      const toggleCell = (newState) => {
    setActiveCells((prev) => (newState ? prev + 1 : Math.max(0, prev - 1)));
  };

    return (
        <GridContext.Provider value = {{activeCells, toggleCell}}>
            {children}
        </GridContext.Provider>
    )
}

export const useGrid =()=> {
    const context = useContext(GridContext);
    if(!context){
        throw new Error("useGrid must be used within a GridProvider");
    }
    return context;
} ;