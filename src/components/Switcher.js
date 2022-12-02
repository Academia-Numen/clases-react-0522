import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Switcher() {
    const { themeStyles, updateThemeStyles } = useContext(ThemeContext);

    return (
        <button onClick={updateThemeStyles} style={themeStyles}>
            Cambiar Tema
        </button>
    );
}

export default Switcher;
