import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../UI/LikeButton";
import FavouriteAPI from "../API/FavouriteAPI";

export default function ImgDetails(props) {
    const data = props.data
    console.log(data)
    const [save, setSave] = useState(false);
    const url = "http://localhost:8080/gallery_database/unsplash/post";

    const { error, saveFavourite } = FavouriteAPI();
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
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
            console.log(res)
            alert("Insert thanh cong!!!")
        } catch (err) {
            alert("Loi: ", err)
        }
    }
    const handleUserPhoto = async () => {
        try {
            await saveFavourite(data.photoId, data.unsplashId);
        } catch (err) {
            console.error("Loi: ", err)
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
                        <button onClick={() => {
                            props.setTrigger(false)
                        }}>X</button>
                    </div>
                    <div className="download-btn"><button >Download</button></div>
                    <div className="d-flex">
                        <LikeButton onClick={() => {
                            setSave(prev => {
                                const newSave = !prev
                                handleSave(newSave)
                                return newSave;
                            },
                                handleUserPhoto()
                            )
                        }} /></div>
                    <div className="d-flex w-100 mb-5">
                        <img src={data.imageUrl} alt="" style={{ maxWidth: "30%", margin: "0 auto", objectFit: "cover" }} />
                    </div>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </>
    ) : "";
}