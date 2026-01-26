import axios from "axios";

const BASE_URL = "http://localhost:8080/favourite";

export const fetchFavouritesAPI = () => {
    return axios.get(`${BASE_URL}/get`, {
        withCredentials: true,
    });
};
