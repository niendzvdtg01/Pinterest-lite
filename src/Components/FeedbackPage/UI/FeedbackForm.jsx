// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import '../feedback.scss'
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from 'react-router-dom';

export function FeedbackForm() {
    const [state, handleSubmit] = useForm("FORM_ID");
    const [score, setScore] = useState(0);
    console.log(score);
    const naviagate = useNavigate();

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form className="fs-form" onSubmit={handleSubmit}>
            <div className="fs-field">
                <label className="fs-label" htmlFor="full-name">
                    Full Name
                </label>
                <input
                    className="fs-input"
                    id="full-name"
                    name="full-name"
                    placeholder="Enter your name (optional)"
                />
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="email-address">
                    Email Address
                </label>
                <input
                    className="fs-input"
                    id="email-address"
                    name="email-address"
                    placeholder="Enter your email address (optional)"
                />
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="response-date">
                    Date
                </label>
                <input
                    className="fs-input"
                    id="response-date"
                    name="response-date"
                    placeholder="Select the date"
                    required
                />
            </div>
            <div
                className="fs-field"
                style={{ position: "relative", marginBottom: "2rem" }}
            >
                <label className="fs-label" htmlFor="nps-score">
                    How likely are you to recommend us to a friend or colleague? (0 &#x3D;
                    Not at all likely, 10 &#x3D; Extremely likely)
                </label>
                <input
                    className="fs-slider"
                    defaultValue="8"
                    id="nps-score"
                    max="10"
                    min="0"
                    name="nps-score"
                    required
                    step="1"
                    type="range"
                    onChange={(e) => {
                        setScore(e.target.value)
                    }}
                />
                <div className="slider-label-container">
                    <span className="slider-label-text">0</span>
                    <span className="slider-label-text">1</span>
                    <span className="slider-label-text">2</span>
                    <span className="slider-label-text">3</span>
                    <span className="slider-label-text">4</span>
                    <span className="slider-label-text">5</span>
                    <span className="slider-label-text">6</span>
                    <span className="slider-label-text">7</span>
                    <span className="slider-label-text">8</span>
                    <span className="slider-label-text">9</span>
                    <span className="slider-label-text">10</span>
                </div>
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="score-reason">
                    What is the primary reason for your score?
                </label>
                <textarea
                    className="fs-textarea"
                    id="score-reason"
                    name="score-reason"
                    placeholder="Explain why you gave us this score"
                    required
                />
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="improvement-suggestion">
                    What could we do to improve your experience?
                </label>
                <textarea
                    className="fs-textarea"
                    id="improvement-suggestion"
                    name="improvement-suggestion"
                    placeholder="Let us know what we can improve (optional)"
                />
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="positive-feedback">
                    What did we do well?
                </label>
                <textarea
                    className="fs-textarea"
                    id="positive-feedback"
                    name="positive-feedback"
                    placeholder="Tell us what worked well for you (optional)"
                />
            </div>
            <div className="fs-field">
                <label className="fs-label">
                    Would you be open to sharing a testimonial?
                </label>
                <div className="fs-radio-group">
                    <div className="fs-radio-field">
                        <div className="fs-radio-wrapper">
                            <input
                                className="fs-radio"
                                id="testimonial-consent-yes"
                                name="testimonial-consent"
                                required
                                type="radio"
                                value="yes"
                            />
                        </div>
                        <div>
                            <label className="fs-label" htmlFor="testimonial-consent-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="fs-radio-field">
                        <div className="fs-radio-wrapper">
                            <input
                                className="fs-radio"
                                id="testimonial-consent-no"
                                name="testimonial-consent"
                                required
                                type="radio"
                                value="no"
                            />
                        </div>
                        <div>
                            <label className="fs-label" htmlFor="testimonial-consent-no">
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fs-checkbox-field">
                <div className="fs-checkbox-wrapper">
                    <input
                        className="fs-checkbox"
                        id="follow-up-consent"
                        name="follow-up-consent"
                        type="checkbox"
                        value="yes"
                    />
                </div>
                <div>
                    <label className="fs-label" htmlFor="follow-up-consent">
                        May we contact you for follow-up?
                    </label>
                </div>
            </div>
            <div class="fs-button-group">
                <button className="fs-button" type="submit">
                    Submit
                </button>
                <button className="fs-button" onClick={() => {
                    naviagate("/gallery")
                }}>
                    Go to dashboard
                </button>
            </div>
        </form>
    );
}