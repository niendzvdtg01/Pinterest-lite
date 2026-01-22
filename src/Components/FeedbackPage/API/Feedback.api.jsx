import axios from "axios"

const FEEDBACK_URL = "http://localhost:8080/gallery_database/feedback/post"
export const FeedbackAPI = (feedback) => {
    return axios.post(FEEDBACK_URL, feedback,
        {
            withCredentials: true
        }
    )
}