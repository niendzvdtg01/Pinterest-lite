import axios from "axios";

const UPLOAD_URL = "http://localhost:8080/gallery_database/photo/uploaded_photo";
export function fetchUploadPhoto() {
    return axios.get(UPLOAD_URL, {
        withCredentials: true
    });
};