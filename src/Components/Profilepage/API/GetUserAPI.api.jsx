import axios from "axios";

const GET_URL = "http://localhost:8080/user/get_user";
export const getUser = () => {
    return axios.get(GET_URL,
        { withCredentials: true }
    )
}