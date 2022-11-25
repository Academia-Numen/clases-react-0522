import axios from "axios";
import { useState } from "react";

const errorInitialState = { isError: false, message: '' };
const successInitialState = { wasSent: false, message: '' };
const loadingInitialState = { isLoading: false, message: '' };

const useFormSubmission = (
    url, 
    method,
    refetch, 
    payload, 
    emptyState, 
    errorMessage,
    successMessage,
    loadingMessage,
) => {
    const [error, setError] = useState(errorInitialState);
    const [success, setSuccess] = useState(successInitialState);
    const [isLoading, setIsLoading] = useState(loadingInitialState);

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsLoading({ isLoading: true, message: loadingMessage });
            setSuccess(successInitialState);
            setError(errorInitialState);

            const res = await axios({
                method: method,
                url: url,
                data: payload,
            })

            const code = method === 'post' ? 201 : 200;

            if (res.status === code) {
                emptyState();
                setSuccess({ wasSent: true, message: successMessage })
                setTimeout(() => refetch(), 1000);
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

    return { submitHandler, isLoading, error, success };
}

export default useFormSubmission;