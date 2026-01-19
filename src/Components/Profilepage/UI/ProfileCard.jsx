import { useNavigate } from "react-router-dom"

export default function ProfileCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container mt-3">
                <div className="card" style={{ width: "400px" }}>
                    <img className="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
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