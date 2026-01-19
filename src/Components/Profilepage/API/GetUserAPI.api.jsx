import axios from "axios";

const GET_URL = "http://localhost:8080/gallery_database/user/get_user";
export const getUser = () => {
    return axios.get(GET_URL,
        { withCredentials: true }
    )
}