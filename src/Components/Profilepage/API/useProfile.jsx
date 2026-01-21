import { useContext } from "react"
import { UploadPhotoContext } from "./UploadPhotoContext"

export const useProfile = () => {
    const context = useContext(UploadPhotoContext);
    console.log(context);
    if (!context) {
        throw new Error("Loi")
    }
    return context;
}