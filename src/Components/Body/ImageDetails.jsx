import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../UI/LikeButton";

export default function ImgDetails(props) {
    const data = props.data
    console.log(data)
    const [save, setSave] = useState(false);
    const key = import.meta.env.VITE_NIEN
    const url = "http://localhost:8080/gallery_database/unsplash/post";
    const handleDownload = async () => {
        try {
            const res = await axios.get(`${data.links.download_location}`,
                {
                    headers: { Authorization: `Client-ID ${key}` }
                }
            );
            window.open(res.data.url, "_blank")
        } catch (err) {
            alert("Error: ", err)
            // console.log(err)
        }
    }

    //Xu ly insert du lieu vao db
    const handleSave = async (newSave) => {
        if (!newSave) return;
        if (!data.unsplashId) return;

        const loadData = {
            unsplashId: data.unsplashId,
            unsplashUrl: data.imageUrl,
            unsplashTitle: data.title,
            unsplashDescription: data.descriptions
        };
        try {
            const res = await axios.post(url, loadData,
                {
                    headers: { "Content-Type": "application/json" }
                }
            )
            console.log(res)
            alert("Insert thanh cong!!!")
        } catch (err) {
            alert("Loi: ", err)
        }
    }
    useEffect(() => {
        if (props.trigger) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [props.trigger])
    return (props.trigger) ? (
        <>
            <div className="imagedetails-background">
                <div className="imagedetails-popup">
                    <div className="close-btn">
                        <button onClick={() => { props.setTrigger(false) }}>X</button>
                    </div>
                    <div className="download-btn"><button onClick={handleDownload}>Download</button></div>
                    <div className="d-flex">
                        <LikeButton onClick={() => {
                            setSave(prev => {
                                const newSave = !prev
                                handleSave(newSave)
                                return newSave;
                            })
                        }} /></div>
                    <div className="d-flex w-100 mb-5">
                        <img src={data.imageUrl} alt="" style={{ maxWidth: "30%", margin: "0 auto", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </>
    ) : "";
}