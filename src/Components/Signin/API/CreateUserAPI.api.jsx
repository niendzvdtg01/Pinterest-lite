import axios from "axios";

const BASE_URL = "http://localhost:8080/user/create_user";
export const CreateUser = (data) => {
    return axios.post(BASE_URL, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    })
}