import axios from "axios";
import { useEffect } from "react";

export default function ImgDetails(props) {
    const data = props.data
    // console.log(data)
    const key = import.meta.env.VITE_NIEN
    const handleDownload = async () => {
        try {
            const res = await axios.get(`${data.links.download_location}`,
                {
                    headers: { Authorization: `Client-ID ${key}` }
                }
            );
            window.open(res.data.url, "_blank")
        } catch (err) {
            alert("Error: ", err)
            // console.log(err)
        }
    }
    useEffect(() => {
        if (props.trigger) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [props.trigger])
    return (props.trigger) ? (
        <>
            <div className="imagedetails-background">
                <div className="imagedetails-popup">
                    <div className="close-btn">
                        <button onClick={() => { props.setTrigger(false) }}>X</button>
                    </div>
                    <div className="download-btn"><button onClick={handleDownload}>Download</button></div>
                    <div className="d-flex w-100 mb-5">
                        <img src={data.urls.small} alt="" style={{ maxWidth: "30%", margin: "0 auto", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </>
    ) : "";
}