import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import Layout from "./Layout";

export const BASE_URL = 'http://localhost:8000';

function App() {

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
