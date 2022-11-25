import axios from "axios";
import { useState } from "react";

const errorInitialState = { isError: false, message: '' };

const useDeleteData = (url, onSuccess, errorMessage) => {
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const deleteForm = async (id) => {
        try {
            setIsLoading(true);
            setError(errorInitialState);
            const res = await axios({
                method: 'delete',
                url: `${url}/${id}`,
            })
            if (res.status === 200) {
                setTimeout(() => onSuccess(), 1000);
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

    return { deleteForm, isLoading, error };
}

export default useDeleteData;