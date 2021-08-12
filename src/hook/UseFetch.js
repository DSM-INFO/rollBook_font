import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "./useCookie";

const UseFetch = (url) => {
    const [data, setWord] = useState([]);

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getCookie("access_token").value,
                },
            })
            .then((data) => {
                setWord(data);
            });
    }, [url]);
    return data;
};

export default UseFetch;
