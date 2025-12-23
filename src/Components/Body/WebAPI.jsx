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
    const standardUrl = "http://localhost:8080/gallery_database/photo/image"
    console.log(query)
    const FetchAPI = async () => {
        try {
            /*
            - fetch api
            - Truyen key
            - truyen paramater
            */

            const res = await axios.get(standardUrl, {
                params: {
                    keyword: query
                }
            })
            const data = await res.data;
            //fetch them api
            setPhotos(prev => [...prev, ...data]);
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