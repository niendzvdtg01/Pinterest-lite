import '../profile.scss'
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UploadPhotoContext } from "../API/UploadPhotoContext";

export default function ProfileCard() {
    const navigate = useNavigate();
    const context = useContext(UploadPhotoContext);
    const user = context.user;
    console.log(user);
    return (
        <>
            <div className="container mt-3">
                <div className="card" style={{ width: "400px" }}>
                    <img className="card-img-top card-img" src={user?.[0]?.profilePicture} alt="Card image" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">{user?.[0]?.firstname}</h4>
                        <p className="card-text">{user?.[0]?.bio}</p>
                        <a className="btn btn-primary m-3" onClick={() => {
                            navigate("/gallery")
                        }}>Go back to your dashboard.</a>
                        <a href="#" className="btn btn-primary m-3">Logout</a>
                    </div>
                </div>
            </div>
        </>
    )
}