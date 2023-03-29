import { useEffect, useState } from "react";
import axios from 'axios';

const initialState = {
    response: undefined,
    error: '',
    isLoading: false,
    params: ''
};

export function useRequest({ url, method, params }) {

    const [state, setState] = useState(initialState);
    const { response, error, isLoading } = state;

    const fetchData = async () => {
        setState((prev) => {
            return {
                ...prev,
                isLoading: true
            }
        });
        try {
            const result = await axios[method](url, { params });
            setState((prev) => {
                return { ...prev, response: result.data }
            });

        } catch (error) {
            setState((prev) => {
                return {
                    ...prev,
                    error: error
                }
            });
        } finally {
            setState((prev) => {
                return {
                    ...prev,
                    isLoading: false
                }
            });
        }
    };

    useEffect(() => {
        if (!!url) {
            console.log(url, method, params);
            fetchData();
        }
    }, [url, method, params])

    return { response, error, isLoading };
}