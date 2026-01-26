import axios from "axios"

const FEEDBACK_URL = "http://localhost:8080/feedback/post"
export const FeedbackAPI = (feedback) => {
    return axios.post(FEEDBACK_URL, feedback,
        {
            withCredentials: true
        }
    )
}