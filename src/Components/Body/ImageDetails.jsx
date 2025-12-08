import axios from "axios";

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
            console.log(err)
        }
    }
    return (props.trigger) ? (
        <>
            <div className="imagedetails-background">
                <div className="imagedetails-popup">
                    <div className="close-btn">
                        <button onClick={() => { props.setTrigger(false) }}>X</button>
                    </div>
                    <div><button onClick={handleDownload}>Download</button></div>
                    <div className="d-flex w-100">
                        <img src={data.urls.small} alt="" style={{ maxWidth: "33%", margin: "0 auto", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </>
    ) : "";
}