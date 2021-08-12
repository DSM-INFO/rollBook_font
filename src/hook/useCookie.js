import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, ...option) => {
    console.log(`name : ${name} || value : ${value}`);
    return cookie.set(name, value, { ...option });
};

export const getCookie = (name) => {
    console.log(`print : ${cookie.get(name)}`);
    return cookie.get(name);
};
