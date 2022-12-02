import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider (props) {
    const { children } = props;
    const [isLightTheme, setIsLightTheme] = useState(false);

    const updateThemeStyles = () => setIsLightTheme(!isLightTheme);

    const themeStyles = {
        color: isLightTheme ? "#555" : '#ddd',
        background: isLightTheme ? '#eee' : "#555",
    }

    return (
        <ThemeContext.Provider value={{ themeStyles, updateThemeStyles }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider ;
