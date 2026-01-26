import axios from "axios";
import { useState } from "react"

export default function FavouriteAPI() {
    const [err, setError] = useState(null);
    const url = "http://localhost:8080/favourite/post";
    const saveFavourite = async (photoId, unsplashId) => {
        const saveData = {
            photoId: photoId,
            unsplashId: unsplashId
        }
        try {
            const res = await axios.post(url, saveData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            return res.data;
        } catch (err) {
            console.error(err)
            setError(err)
        }
    }
    return { err, saveFavourite }
}