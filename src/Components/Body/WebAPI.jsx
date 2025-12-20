import { useState, useEffect } from "react"
import axios from "axios";
import Landcape from "./ImgLandscape";
import InfiniteScroll from "react-infinite-scroll-component";
import UploadPopup from "./UploadPopup";

export default function WebAPI({ query }) {
    // let [results, setResults] = useState("")
    // const HandleSearch = (e) => {
    //     setResults(e)
    // }
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const key = import.meta.env.VITE_NIEN;
    const search_url = "https://api.unsplash.com/search/photos"
    const standard_url = "https://api.unsplash.com/photos"
    console.log(query)
    const FetchAPI = async () => {
        try {
            /*
            - fetch api
            - Truyen key
            - truyen paramater
            */
            if (query.length === 0) {
                const res = await axios.get(standard_url,
                    {
                        headers: { Authorization: `Client-ID ${key}` },
                        params: {
                            per_page: 20
                        }
                    }
                )
                const data = await res.data;
                // console.log(data)
                setPhotos(prev => [...prev, ...data]);
            } else {
                const res = await axios.get(search_url,
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
                const data = await res.data;
                //fetch them api
                setPhotos(prev => [...prev, ...data.results]);
            }
        } catch (err) {
            console.log(err)
        }
    }
    //chay api va set page
    useEffect(() => {
        if (!query) {
            setPage(1);
            return;
        }
        setPhotos([]);
        //reset lai anh sau khi thay doi query
        setPage(1);
        //tuong tu set lai page sau khi doi query
    }, [query]);
    useEffect(() => {
        FetchAPI()
    }, [page, query])
    return (
        //Su dung thu vien inifity scroll de ta hieu ung anh vo han
        <>
            <InfiniteScroll
                dataLength={photos.length}
                next={() => setPage(prev => prev + 1)}
                hasMore={true}//Cac thuoc tinh can co de chay duoc thu vien
            >
                <Landcape data={photos} />
            </InfiniteScroll>
            {/* <UploadPopup trigger={false} /> */}
        </>
    )
}