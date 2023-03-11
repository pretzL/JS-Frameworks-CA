import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url);
                const result = await fetchedData.json();
                setData(result);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [url]);
    return { data, isLoading, isError };
}
