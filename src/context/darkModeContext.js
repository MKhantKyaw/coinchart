import { createContext, useState } from 'react'

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {

    const [dark, setDark] = useState(true)

    function toggleTheme() {
        setDark(!dark);
    }

    return (
        <DarkModeContext.Provider value={{ toggleTheme, dark }}>
            {children}
        </DarkModeContext.Provider>
    )
}