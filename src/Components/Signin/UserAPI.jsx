import axios from "axios"
import { useEffect, useState } from "react";
import Login from "./mainpage";

export default function UserAPI() {
    const [data, setData] = useState([]);
    const url = import.meta.env.VITE_MAINURL;
    const fecthAPI = async () => {
        try {
            const userData = await axios.get(url);
            setData(userData.data);
            console.log(userData.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fecthAPI()
    }, [])
    console.log(data)
    return (
        <Login user={data} />
    )
}