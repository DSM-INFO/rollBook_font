import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setWord] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setWord(data);
            });
    }, [url]);
    return data;
};

export default UseFetch;
