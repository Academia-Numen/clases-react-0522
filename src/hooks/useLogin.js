import axios from "axios";
import { useState } from "react";
import sign from 'jwt-encode';
import jwt_decode from 'jwt-decode';

const JWT_SECRET = 'this-is-a-secret';

const errorInitialState = { isError: false, message: '' };
const loadingInitialState = { isLoading: false, message: '' };

const useLogin = (
    url,
    payload,
    emptyState,
    errorMessage,
    loadingMessage,
    login,
) => {
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(loadingInitialState);

    const startLogin = async (e) => {
        try {
            e.preventDefault();
            setIsLoading({ isLoading: true, message: loadingMessage });
            setError(errorInitialState);

            const data = { token: sign(payload, JWT_SECRET) };

            const res = await axios({
                method: 'post',
                url: url,
                data: data,
            })

            if (res.status === 201) {
                const decoded = jwt_decode(res.data.token);
                const { email, password } = decoded;

                if (payload.email === email && payload.password === password) {
                    setTimeout(() => {
                        emptyState();
                        login();
                    }, 1000);
                }
            }
        } catch (e) {
            setError({
                isError: true,
                message: e?.message || errorMessage,
            })
        } finally {
            setTimeout(() => setIsLoading(false), 1000);
        }
    }

    return { startLogin, isLoading, error };
}

export default useLogin;