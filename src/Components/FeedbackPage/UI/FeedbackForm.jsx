import '../feedback.scss'
import React, { useContext, useState } from "react";
import { useForm } from "@formspree/react";
import { useNavigate } from 'react-router-dom';
import { FeedbackContext } from '../API/FeedbackContext';
import { Spinner } from './Spinner';

export function FeedbackForm() {
    const [state, handleSubmit] = useForm("FORM_ID");

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore] = useState(8);
    const [scoreReason, setScoreReason] = useState("");
    const [improvement, setImprovement] = useState("");
    const [goodExperience, setGoodExperience] = useState("");

    const context = useContext(FeedbackContext);
    const navigate = useNavigate();

    const handleFeedback = async (e) => {
        e.preventDefault();

        const feedback = {
            fullName: fullname,
            email,
            score,
            scoreReason,
            improvement,
            goodExperience
        };

        context.handleFeedbackAPI(feedback);
        await handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className="fs-success text-center">
                <h3>Thank you for your feedback ✨</h3>
                <p>Your insights help us improve the creative experience.</p>
                <button className="fs-button mt-3" onClick={() => navigate("/gallery")}>
                    Back to Gallery
                </button>
            </div>
        );
    }

    return (
        <form className="fs-form" onSubmit={handleFeedback}>

            <h2 className="fs-title">Share Your Experience</h2>
            <p className="fs-subtitle">
                Your feedback helps us build a better platform for photographers and creators.
            </p>

            {/* Name */}
            <div className="fs-field">
                <label className="fs-label">Full Name</label>
                <input
                    className="fs-input"
                    placeholder="Your name (optional)"
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="fs-field">
                <label className="fs-label">Email Address</label>
                <input
                    className="fs-input"
                    type="email"
                    placeholder="Your email (optional)"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Score */}
            <div className="fs-field fs-slider-field">
                <label className="fs-label">
                    How likely are you to recommend our platform to others?
                </label>
                <input
                    className="fs-slider"
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    defaultValue="8"
                    onChange={(e) => setScore(Number(e.target.value))}
                />
                <div className="slider-label-container">
                    {[...Array(11)].map((_, i) => (
                        <span key={i} className="slider-label-text">{i}</span>
                    ))}
                </div>
            </div>

            {/* Reason */}
            <div className="fs-field">
                <label className="fs-label">
                    What influenced your rating the most?
                </label>
                <textarea
                    className="fs-textarea"
                    placeholder="Share your thoughts"
                    required
                    onChange={(e) => setScoreReason(e.target.value)}
                />
            </div>

            {/* Improvement */}
            <div className="fs-field">
                <label className="fs-label">
                    How can we improve?
                </label>
                <textarea
                    className="fs-textarea"
                    placeholder="Any suggestions for improvement (optional)"
                    onChange={(e) => setImprovement(e.target.value)}
                />
            </div>

            {/* Positive */}
            <div className="fs-field">
                <label className="fs-label">
                    What did you enjoy most?
                </label>
                <textarea
                    className="fs-textarea"
                    placeholder="Tell us what worked well (optional)"
                    onChange={(e) => setGoodExperience(e.target.value)}
                />
            </div>

            {/* Actions */}
            <div className="fs-button-group">
                {context.loading ? <Spinner /> : <button className="fs-button" type="submit">
                    Submit Feedback
                </button>}
                <button
                    type="button"
                    className="fs-button fs-secondary"
                    onClick={() => navigate("/gallery")}
                >
                    Back to Dashboard
                </button>
            </div>

        </form>
    );
}
