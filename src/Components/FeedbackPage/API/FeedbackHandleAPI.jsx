import { useCallback, useEffect, useState } from "react";
import { FeedbackAPI } from "./Feedback.api";
import { FeedbackContext } from "./FeedbackContext";

export default function FeedbackHandleAPI({ children }) {
    const [data, setData] = useState("");
    const [laoding, setLoading] = useState(false)
    const handleFeedbackAPI = useCallback(async (feedback) => {
        try {
            setLoading(true)
            const res = await FeedbackAPI(feedback);
            setData(res.data);
            alert("Upload thanh cong!!!");
        } catch (err) {
            console.error("Loi: ", err)
        } finally {
            setLoading(false)
        }
    }, []);
    useEffect(() => {
        handleFeedbackAPI();
    }, [handleFeedbackAPI])
    return (
        <FeedbackContext.Provider value={{ data, laoding, handleFeedbackAPI }}>
            {children}
        </FeedbackContext.Provider>
    )
}