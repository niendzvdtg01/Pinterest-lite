import { useCallback, useEffect, useState } from "react";
import { fetchUploadPhoto } from "./UploadPhotoProfile.api";
import { UploadPhotoContext } from "./UploadPhotoContext";
import { fetchUpdateAPI } from "./UpdateProfile.api";
import { getUser } from "./GetUserAPI.api";
import { toast } from "react-toastify";

export default function ProfileProvider({ children }) {
    const [uploadPhoto, setUploadPhoto] = useState([]);
    const [updateUser, setUpdateUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
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
    const uploadAPI = useCallback(async (formData) => {
        try {
            const res = await fetchUpdateAPI(formData);
            setUpdateUser(res.data);
            toast.success("Sua thong tin thanh cong")
        } catch (err) {
            console.error("Loi: ", err);
        }

    }, [])
    const getAPI = useCallback(async () => {
        try {
            const res = await getUser();
            setUser(res.data)
        } catch (err) {
            console.error("Loi: ", err);
        }
    }, [])
    useEffect(() => {
        fetchAPI()
        getAPI()
    }, [fetchAPI, getAPI]);
    return (
        <UploadPhotoContext.Provider value={{ uploadPhoto, loading, updateUser, uploadAPI, user }}>
            {children}
        </UploadPhotoContext.Provider>
    )
}