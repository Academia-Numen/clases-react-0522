import { useContext } from "react";
import Switcher from "./components/Switcher";
import { AuthContext } from "./contexts/AuthContext";
import { ThemeContext } from "./contexts/ThemeContext";
import centerItems from "./globalStyles";
import Login from "./pages/Login";
import Main from "./pages/Main";

function Layout() {
    const { themeStyles } = useContext(ThemeContext);

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div style={{ 
            ...centerItems(), 
            paddgin: 20, 
            ...themeStyles,
            minHeight: '100vh',
            boxSizing: 'border-box',
        }}>
            <Switcher />

            {isLoggedIn ? <Main /> : <Login />}
        </div>
    );
}

export default Layout;
