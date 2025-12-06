import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import axios from "axios";
import Landcape from "./ImgLandscape";
import InfiniteScroll from "react-infinite-scroll-component";

export default function WebAPI({ query }) {
    // let [results, setResults] = useState("")
    // const HandleSearch = (e) => {
    //     setResults(e)
    // }
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const key = import.meta.env.VITE_NIEN;
    console.log(query)
    const FetchAPI = async () => {
        try {
            /*
            - fetch api
            - Truyen key
            - truyen paramater
            */
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
            //fetch them api
            setPhotos(prev => [...prev, ...data.results]);
        } catch (err) {
            console.log(err)
        }
    }
    //chay api va set page
    useEffect(() => {
        if (query) {
            setPage(1)
        }
        FetchAPI()
    }, [query, page])
    return (
        //Su dung thu vien inifity scroll de ta hieu ung anh vo han
        <InfiniteScroll
            dataLength={photos.length}
            next={() => setPage(prev => prev + 1)}
            hasMore={true}//Cac thuoc tinh can co de chay duoc thu vien
        >
            <Landcape data={photos} />
        </InfiniteScroll>
    )
}