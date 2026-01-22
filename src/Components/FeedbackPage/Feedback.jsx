import { Footer } from "../UI/LiteFooter";
import FeedbackHandleAPI from "./API/FeedbackHandleAPI";
import { FeedbackForm } from "./UI/FeedbackForm";
import { Header } from "./UI/Header";

export default function Feedback() {
    return (
        <FeedbackHandleAPI>
            <div><Header /></div>
            <div className="container mt-5">
                <FeedbackForm />
            </div>
            <div>
                <Footer />
            </div>
        </FeedbackHandleAPI>
    )
}