import { FeedbackForm } from "./UI/FeedbackForm";
import { Header } from "./UI/Header";

export default function Feedback() {
    return (
        <>
            <div><Header /></div>
            <div className="container mt-5">
                <FeedbackForm />
            </div>
        </>
    )
}