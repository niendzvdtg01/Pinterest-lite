import { useContext, useState } from "react";
import { UploadPhotoContext } from "../API/UploadPhotoContext";

export default function Form() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [file, setFile] = useState(null);

    const context = useContext(UploadPhotoContext);
    // console.log(context.uploadAPI);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("file", file);
        formData.append("bio", bio);
        context.uploadAPI(formData);
    }
    return (
        <>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue="Mark"
                        required
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        defaultValue="Otto"
                        required
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">
                        email
                    </label>
                    <div className="input-group has-validation">
                        <input
                            type="email"
                            className="form-control"
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <div className="invalid-feedback">
                            Please choose a email.
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">
                        Bio
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        required
                        onChange={(e) => {
                            setBio(e.target.value)
                        }}
                    />
                    <div className="invalid-feedback">
                        Please provide some informations about you.
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">
                        Your profile picture.
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="validationCustom05"
                        required
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                        accept="image/*"
                    />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="invalidCheck"
                            required
                        />
                        <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                        >
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Change your information.
                    </button>
                </div>
            </form>
        </>
    );
}