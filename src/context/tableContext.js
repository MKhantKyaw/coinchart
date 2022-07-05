import { useState, createContext } from "react";


export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
    const [tableType, setTableType] = useState("price");

    function toggleTableType() {
        if (tableType === "price") setTableType("fiat")
        else setTableType("price")
    }

    return (
        <TableContext.Provider value={{ toggleTableType, tableType }}>
            {children}
        </TableContext.Provider>
    )
}