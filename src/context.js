import React, { useState, useContext } from "react";


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //state for markdown , setup initial state later
    const [markdown, setMarkdown] = useState('## markdown preview')

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