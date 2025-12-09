import './style.scss'
import img from './img/image-regular-full.svg'
import { useRef, useState } from 'react'
export default function UploadPopup(props) {
    const fileInput = useRef(null);
    const [filename, setFilename] = useState([])
    const handleFileInput = (event) => {
        const fileUpload = event.target.files[0];
        setFilename(fileUpload);
    }
    const handleClick = () => {
        fileInput.current.click();
    }
    //Tao dieu kien de hien thi popup
    return (props.trigger) ? (
        <div className="upload-background">
            <div className='upload-popup'>
                <div className='close-btn'>
                    <button onClick={() => { props.setTrigger(false) }}>x</button>
                </div>
                <div className='d-flex w-100'>
                    <img src={img} alt="upload img" style={{
                        width: "200px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto"
                    }} />
                </div>
                <input type="file"
                    ref={fileInput}
                    onChange={handleFileInput}
                    accept="image/*"
                    style={{ display: "none" }}
                />
                <div className='upload-btn d-flex'>
                    <button onClick={handleClick} style={{ margin: "0 auto" }}>Upload file</button>
                </div>
                <div className='d-flex'>
                    <p style={{ margin: "0 auto" }}>{filename.name || "no image chosen"}</p>
                </div>
            </div>
        </div>
    ) : ""
}