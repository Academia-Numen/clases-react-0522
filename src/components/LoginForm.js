import { faCircleCheck, faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import useLogin from "../hooks/useLogin";
import Icon from "./Icon";
import InputText from "./InputText";
import SubmitButton from "./SubmitButton";

const LoginForm = (props) => {
    const {
        url,
        errorMessage,
        loadingMessage,
    } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { themeStyles } = useContext(ThemeContext);

    const { login, isLoggedIn } = useContext(AuthContext);

    const emptyState = () => {
        setEmail('');
        setPassword('');
    }

    const payload = {
        email: email,
        pass: password,
    };

    const { startLogin, isLoading, error } = useLogin(
        url,
        payload,
        emptyState,
        errorMessage,
        loadingMessage,
        login,
    )

    return (
        <div style={{ 
            marginTop: '2rem',
            padding: '1.5rem 1.5rem 3rem 1.5rem',
            border: `solid ${themeStyles.color} 1px`,
        }}>
            {isLoading.isLoading ? (
                <Icon
                    name={faSpinner}
                    size={40}
                    rotate={true}
                    text={isLoading.message}
                />
            ) : (
                <form onSubmit={startLogin}>

                    <h2>Login</h2>

                    <InputText
                        value={email}
                        changeHandler={(e) => setEmail(e.target.value)}
                        label="Email: "
                        name="email"
                    />

                    <InputText
                        value={password}
                        changeHandler={(e) => setPassword(e.target.value)}
                        label="Password: "
                        name="password"
                    />

                    <SubmitButton value="Entrar" />

                </form>
            )}

            {
                error.isError && (
                    <Icon
                        name={faCircleExclamation}
                        size={20}
                        color="red"
                        text={error.message}
                    />
                )
            }

            {
                isLoggedIn && (
                    <Icon
                        name={faCircleCheck}
                        size={20}
                        color="green"
                        text="Te has logeado exitosamente"
                    />
                )
            }
        </div >
    )
}

export default LoginForm;