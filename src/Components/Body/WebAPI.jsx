import { useState } from "react"
import SearchBar from "./SearchBar"
import axios from "axios";

export default function WebAPI({ query }) {
    // let [results, setResults] = useState("")
    // const HandleSearch = (e) => {
    //     setResults(e)
    // }
    const key = import.meta.env.VITE;
    console.log(query)
    const FetchAPi = async () => {
        try {
            const res = await axios.get("https://api.unsplash.com/search/photos",
                {
                    headers: {
                        Authorization: `Client-ID ${key}`
                    },
                    params: {
                        query,
                        perpage: 20
                    }
                }
            )
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        </>
    )
}