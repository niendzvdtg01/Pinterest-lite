import axios from "axios"
const CATEGORY_API = "http://localhost:8080/gallery_database/photo/image";
export const CategoryAPI = (keyword) => {
    return axios.get(CATEGORY_API,
        {
            params: {
                keyword: keyword
            },
            withCredentials: true
        }
    )
}