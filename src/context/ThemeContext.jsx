import {createContext, useState, useEffect} from 'react'


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");

        return saved ? saved === "dark" :  true;
     })
    const themeName = darkMode ? "Dark" : "Light";

    useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return(
        <ThemeContext.Provider 
        value = {{darkMode, setDarkMode, themeName}}
        >
        {children}
        </ ThemeContext.Provider>
    )

}

