import { useContext, useState } from "react";
import { UploadPhotoContext } from "../API/UploadPhotoContext";

export default function Form() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [file, setFile] = useState(null);

    const context = useContext(UploadPhotoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("file", file);
        formData.append("bio", bio);
        context.uploadAPI(formData);
    };

    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                    <h3 className="mb-4 text-center">
                        Photographer Profile
                    </h3>

                    <form className="row g-4" onSubmit={handleSubmit} noValidate>

                        {/* First name */}
                        <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your first name"
                                required
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>

                        {/* Last name */}
                        <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your last name"
                                required
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-12">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="your@email.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Bio */}
                        <div className="col-md-12">
                            <label className="form-label">Short Bio</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Tell us about yourself and your photography style..."
                                required
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </div>

                        {/* Upload image */}
                        <div className="col-md-12">
                            <label className="form-label">Profile Photo</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                required
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <small className="text-muted">
                                Upload a clear portrait photo (JPG, PNG).
                            </small>
                        </div>

                        {/* Checkbox */}
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    required
                                    id="termsCheck"
                                />
                                <label className="form-check-label" htmlFor="termsCheck">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="col-12 text-center">
                            <button
                                className="btn btn-dark px-5 py-2"
                                type="submit"
                            >
                                Save Profile
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
