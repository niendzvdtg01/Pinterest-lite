import axios from "axios";

const BASE_URL = "http://localhost:8080/gallery_database/favourite";

export const fetchFavouritesAPI = () => {
    return axios.get(`${BASE_URL}/get`, {
        withCredentials: true,
    });
};
