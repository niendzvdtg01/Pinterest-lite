import axios from "axios"
const UPDATE_URL = "http://localhost:8080/gallery_database/user/update_user"
export const fetchUpdateAPI = (formData) => {
    return axios.post(UPDATE_URL, formData,
        { withCredentials: true }
    )
}