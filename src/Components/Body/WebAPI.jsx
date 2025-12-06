import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import axios from "axios";
import Landcape from "./ImgLandscape";

export default function WebAPI({ query }) {
    // let [results, setResults] = useState("")
    // const HandleSearch = (e) => {
    //     setResults(e)
    // }
    const [photos, setPhotos] = useState([]);
    const key = import.meta.env.VITE_NIEN;
    console.log(query)
    const FetchAPI = async () => {
        try {
            const res = await axios.get("https://api.unsplash.com/search/photos",
                {
                    headers: {
                        Authorization: `Client-ID ${key}`
                    },
                    params: {
                        query: query,
                        per_page: 20
                    }
                }
            )
            const data = await res.data
            setPhotos(data.results)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        FetchAPI()
    }, [query])
    return (
        <Landcape data={photos} />
    )
}