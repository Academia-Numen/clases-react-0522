import axios from "axios";
import { useEffect, useState } from "react";

const errorInitialState = { isError: false, message: '' };

const useFetchData = (url, refetch) => {
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(errorInitialState);
                const res = await axios({
                    method: 'get',
                    url: url,
                })
                setData(res.data);
            } catch (e) {
                setError({
                    isError: true,
                    message: e?.message || 'Hubo un error al enviar el formulario',
                })
            } finally {
                setTimeout(() => setIsLoading(false), 1000);
            }
        };
        fetchData();
    }, [refetch, url]);

    return { data, isLoading, error };
}

export default useFetchData;