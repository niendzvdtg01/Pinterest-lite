import { useCallback, useEffect, useState } from "react";
import { fetchUploadPhoto } from "./UploadPhotoProfile.api";
import { UploadPhotoContext } from "./UploadPhotoContext";

export default function ProfileProvider({ children }) {
    const [uploadPhoto, setUploadPhoto] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchAPI = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetchUploadPhoto();
            setUploadPhoto(res.data);
            console.log(res);
        } catch (err) {
            console.error("Loi: ", err);
        } finally {
            setLoading(false);
        }
    }, [])
    useEffect(() => {
        fetchAPI()
    }, [fetchAPI]);
    return (
        <UploadPhotoContext.Provider value={{ uploadPhoto, loading }}>
            {children}
        </UploadPhotoContext.Provider>
    )
}