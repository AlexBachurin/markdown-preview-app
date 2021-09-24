import React, { useState, useContext } from "react";
import initialMarkdown from "./initialMarkdown";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //state for markdown , setup initial markdown from initialMarkdown.js
    const [markdown, setMarkdown] = useState(initialMarkdown)

    //handle textArea input change
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }
    return <AppContext.Provider value={{
        markdown,
        handleChange
    }}>
        {children}
    </AppContext.Provider>
}



//custom global hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider, AppContext }