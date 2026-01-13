import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

export default function useFavourite() {
    const favouriteContext = createContext();
    const [data, setData] = useState([]);
    const url = "http://localhost:8080/gallery_database/favourite/get";
    const handleAPI = async () => {
        try {
            const res = await axios.get(url, {
                withCredentials: true
            })
            console.log(res.data);
            setData(res.data)
        } catch (err) {
            console.error("Loi: ", err);
        }
    }
    useEffect(() => [
        handleAPI()
    ], [])
    return (
        <favouriteContext.Provider value={{ data }}>
        </favouriteContext.Provider>
    )
}