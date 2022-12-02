import { BASE_URL } from "../App";
import LoginForm from "../components/LoginForm";

function Login() {

    return (
        <LoginForm
            url={`${BASE_URL}/login`}
            errorMessage="Hubo un error al logearse"
            loadingMessage='Usted se está logeando...'
        />
    );
}

export default Login;
