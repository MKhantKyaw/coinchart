import { createContext, useState } from "react";


export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {

    const [sidebar, setSidebar] = useState(false)

    function handleSidebar() {
        setSidebar(!sidebar)
    }
    return (
        <SidebarContext.Provider value={{ handleSidebar, sidebar, setSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}