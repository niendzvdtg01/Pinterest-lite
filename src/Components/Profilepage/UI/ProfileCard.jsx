import '../profile.scss'
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UploadPhotoContext } from "../API/UploadPhotoContext";

export default function ProfileCard() {
    const navigate = useNavigate();
    const context = useContext(UploadPhotoContext);
    const user = context.user;

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow-lg border-0 text-center" style={{ width: "380px" }}>

                {/* Avatar */}
                <div className="d-flex justify-content-center mt-4">
                    <img
                        src={user?.[0]?.profilePicture}
                        alt="Profile"
                        className="rounded-circle"
                        style={{
                            width: "140px",
                            height: "140px",
                            objectFit: "cover",
                            border: "4px solid #f1f1f1"
                        }}
                    />
                </div>

                {/* Info */}
                <div className="card-body px-4">
                    <h4 className="card-title mt-3 mb-1">
                        {user?.[0]?.firstname}
                    </h4>

                    <p className="text-muted mb-3">
                        Photographer & Visual Creator
                    </p>

                    <p className="card-text">
                        {user?.[0]?.bio}
                    </p>

                    {/* Actions */}
                    <div className="d-grid gap-2 mt-4">
                        <button
                            className="btn btn-dark"
                            onClick={() => navigate("/gallery")}
                        >
                            Go to Dashboard
                        </button>

                        <button className="btn btn-outline-secondary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
