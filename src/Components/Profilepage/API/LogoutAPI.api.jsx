import axios from "axios";

const BASE_URL = "http://localhost:8080/auth/logout";
export const logout = () => {
    return axios.post(BASE_URL,
        { withCredentials: true }
    )
}